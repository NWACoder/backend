import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SnippetsModule } from './snippets/snippets.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { TagsModule } from './tags/tags.module';
import { ItemsModule } from './items/items.module';
import { SiteModule } from './site/site.module';
import { ChallengesModule } from './challenges/challenges.module';
import { MailModule } from './mail/mail.module';

@Module({
	imports: [
	ConfigModule
	.forRoot({isGlobal: true}),
	MongooseModule
	.forRootAsync({
		imports: [ConfigModule],
		useFactory: async (configService: ConfigService) => ({
			uri: configService.get<string>('DATABASE_URL'),
			tlsCAFile: `${__dirname}/ca-certificate.cer`,
		}),
		inject: [ConfigService],
	}),
	SnippetsModule, 
	UsersModule, AuthModule, TagsModule, ItemsModule, SiteModule, ChallengesModule, MailModule, ],
	controllers: [AppController],
	providers: [AppService],
})

export class AppModule {}
