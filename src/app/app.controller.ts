import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ParamAuthDto } from 'src/auth/auth.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { dataConstants } from 'src/auth/auth.constants';
import { Roles } from 'src/auth/roles.decorator';
import responeSuccess from 'src/common/library/respone';
import { ParamGet } from './app.dto';

@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  main(): string {
    return this.appService.main();
  }

  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Roles(dataConstants.user)
  @Get('/jobs')
  async jobs(@Query() query: ParamGet): Promise<any> {
    const resService = await this.appService.getJobList(query);
    return responeSuccess({ data: resService.rows, total: resService.count });
  }

  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Roles(dataConstants.user)
  @Get('/jobs/detail/:id')
  async jobsDetail(@Param() param: any): Promise<any> {
    const resService = await this.appService.getJobDetail(Number(param.id));
    return responeSuccess({ data: resService });
  }

  @Post('/login')
  async login(@Body() userParamBody: ParamAuthDto): Promise<any> {
    const resService = await this.appService.loginService(userParamBody);
    return resService;
  }
}
