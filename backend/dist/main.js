"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("@nestjs/config");
const cookieParser = require("cookie-parser");
const ioredis_1 = require("ioredis");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(process.env.PORT ?? 4000);
    const config = app.get(config_1.ConfigService);
    const redis = new ioredis_1.default(config.getOrThrow('REDIS_URI'));
    app.use(cookieParser(config.getOrThrow('COOKIES_SECRET')));
    const validationPipe = new common_1.ValidationPipe({
        transform: true,
    });
    app.useGlobalPipes(validationPipe);
    app.enableCors({
        origin: config.getOrThrow('ALLOWED_ORIGIN'),
        credentials: true,
        exposedHeaders: ['set-cookie'],
    });
}
bootstrap();
//# sourceMappingURL=main.js.map