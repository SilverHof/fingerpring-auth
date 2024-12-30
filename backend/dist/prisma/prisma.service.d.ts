import { OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
export declare class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    static [x: string]: any;
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
}
