import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { ParamAuthDto } from 'src/auth/auth.dto';
import { JobEntity } from 'src/database/jobs.entity';
import {
  jobs_provider,
  user_provider,
} from 'src/database/master-provider-model';
import { UserEntity } from 'src/database/user.entity';
import bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { ParamGet } from './app.dto';
import { pagination } from 'src/common/library/pagination';
import { Op } from 'sequelize';

@Injectable()
export class AppService {
  constructor(
    @Inject(user_provider.provide)
    private userRepository: typeof UserEntity,
    @Inject(jobs_provider.provide)
    private jobsRepository: typeof JobEntity,
    private jwtService: JwtService,
  ) {}

  main(): string {
    return 'success main api';
  }

  async loginService(userParamBody: ParamAuthDto): Promise<any> {
    const { email, password } = userParamBody;
    const dataResponse: any = await this.userRepository.findOne({
      where: {
        email,
      },
      attributes: ['id', 'email', 'password'],
    });
    const userData = dataResponse?.dataValues;
    if (!userData) throw new BadRequestException('Email Not Found');
    const payload = {
      id: userData.id,
      email: userData.email,
    };
    const isMatch = await bcrypt.compareSync(password, userData.password);
    if (!isMatch) throw new BadRequestException('Password Salah');
    const token = this.jwtService.sign(payload);
    return {
      id: userData.id,
      token,
      email: userData.email,
    };
  }

  async getJobDetail(id: number): Promise<any> {
    const resEntity = await this.jobsRepository.findOne({
      where: {
        id,
      },
    });
    return resEntity;
  }

  async getJobList(query: ParamGet): Promise<any> {
    let where;
    const { description, location, type } = query;
    if (description) {
      where = {
        ...where,
        description: {
          [Op.like]: `%${description}%`,
        },
      };
    }
    if (location) {
      where = {
        ...where,
        location: {
          [Op.like]: `%${location}%`,
        },
      };
    }
    if (type) {
      where = {
        ...where,
        type: type,
      };
    }
    const resEntity = await this.jobsRepository.findAndCountAll({
      where,
      ...pagination(query),
      attributes: [
        'id',
        'company',
        'logo',
        'position',
        'role',
        'level',
        'type',
        'location',
        'postedAt',
      ],
    });
    return resEntity;
  }
}
