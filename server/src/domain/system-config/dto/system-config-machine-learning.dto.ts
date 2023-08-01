import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

export enum ModelType {
  IMAGE_CLASSIFICATION = 'image-classification',
  FACIAL_RECOGNITION = 'facial-recognition',
  CLIP = 'clip',
}

export class ModelConfig {
  @IsString()
  @ApiProperty({ type: 'string' })
  modelName!: string;

  @IsEnum(ModelType)
  @ApiProperty({ type: 'string', enum: ModelType, enumName: 'ModelType' })
  modelType!: ModelType;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ type: 'integer' })
  minScore?: number;
}

export class SystemConfigMachineLearningDto {
  @ApiProperty({ type: ModelConfig })
  classification!: ModelConfig;

  @ApiProperty({ type: ModelConfig })
  clipVision!: ModelConfig;

  @ApiProperty({ type: ModelConfig })
  clipText!: ModelConfig;

  @ApiProperty({ type: ModelConfig })
  facialRecognition!: ModelConfig;
}
