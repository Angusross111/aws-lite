import {
  /* ! Do not remove IMPORTS_START / IMPORTS_END ! */
  // $IMPORTS_START
  CreateDistributionCommandOutput as CreateDistributionResponse,
  CreateInvalidationCommandOutput as CreateInvalidationResponse,
  DeleteDistributionCommandOutput as DeleteDistributionResponse,
  GetDistributionCommandOutput as GetDistributionResponse,
  GetDistributionConfigCommandOutput as GetDistributionConfigResponse,
  ListDistributionsCommandOutput as ListDistributionsResponse,
  UpdateDistributionCommandOutput as UpdateDistributionResponse,
  // $IMPORTS_END
} from "@aws-sdk/client-cloudfront";

declare interface AwsLiteCloudFront {
  /* ! Do not remove METHODS_START / METHODS_END ! */
  // $METHODS_START
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateDistribution.html CloudFront: CreateDistribution}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#CreateDistribution CloudFront: CreateDistribution}
   */
  CreateDistribution: (input: { DistributionConfig: Record<string, any> }) => Promise<CreateDistributionResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CreateInvalidation.html CloudFront: CreateInvalidation}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#CreateInvalidation CloudFront: CreateInvalidation}
   */
  CreateInvalidation: (input: { Id: string, InvalidationBatch?: string,array, CallerReference: string }) => Promise<CreateInvalidationResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_DeleteDistribution.html CloudFront: DeleteDistribution}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#DeleteDistribution CloudFront: DeleteDistribution}
   */
  DeleteDistribution: (input: { Id: string, IfMatch?: string }) => Promise<DeleteDistributionResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetDistribution.html CloudFront: GetDistribution}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#GetDistribution CloudFront: GetDistribution}
   */
  GetDistribution: (input: { Id: string }) => Promise<GetDistributionResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetDistributionConfig.html CloudFront: GetDistributionConfig}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#GetDistributionConfig CloudFront: GetDistributionConfig}
   */
  GetDistributionConfig: (input: { Id: string }) => Promise<GetDistributionConfigResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDistributions.html CloudFront: ListDistributions}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#ListDistributions CloudFront: ListDistributions}
   */
  ListDistributions: (input: { Marker?: string, MaxItems?: number, paginate?: boolean }) => Promise<ListDistributionsResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html CloudFront: UpdateDistribution}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/cloudfront/readme.md#UpdateDistribution CloudFront: UpdateDistribution}
   */
  UpdateDistribution: (input: { DistributionConfig: Record<string, any>, Id: string, IfMatch: string }) => Promise<UpdateDistributionResponse>
  // $METHODS_END
}

declare module "@aws-lite/client" {
  interface AwsLiteClient {
    CloudFront: AwsLiteCloudFront;
  }
}
