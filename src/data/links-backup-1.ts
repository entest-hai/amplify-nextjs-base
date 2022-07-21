export interface ComponentNavItem {
  href: string;
  label: string;
  body: string;
}

const sortByLabel = (a: ComponentNavItem, b: ComponentNavItem) =>
  a.label < b.label ? -1 : a.label > b.label ? 1 : 0;

export const sagemakerComponents: ComponentNavItem[] = [
  {
    href: '/sagemaker/endpoint',
    label: 'Sagemaker Endpoint',
    body: `Hello Sagemaker endpoint`,
    platforms: ['react'],
  },
].sort(sortByLabel);

export const amplifyComponents: ComponentNavItem[] = [
  {
    href: '/amplify/scss',
    label: 'Hello SCSS',
    body: `Hello Style SCSS`,
    platforms: ['react'],
  },
  {
    href: '/amplify/theme',
    label: 'Amplify Theme',
    body: `Hello Amplify Theme`,
    platforms: ['react'],
  },
  {
    href: '/amplify/mdx',
    label: 'Hello MDX',
    body: `Hello MDX Markdown`,
    platforms: ['react'],
  },
  {
    href: '/amplify/geo',
    label: 'Hello Amplify Geo',
    body: `Hello Amplify Geo`,
    platforms: ['react'],
  },
  {
    href: '/amplify/auth',
    label: 'Hello Amplify Auth',
    body: `Hello Amplify Authentication`,
    platforms: ['react'],
  },
  {
    href: '/amplify/graphql',
    label: 'Hello Amplify GraphQL',
    body: `Hello Amplify Theme`,
    platforms: ['react'],
  },
  {
    href: '/amplify/pubsub',
    label: 'Hello Amplify PubSub',
    body: `Hello Amplify PubSub`,
    platforms: ['react'],
  },
  {
    href: '/amplify/cognito-hosted-ui',
    label: 'Cognito Hosted UI',
    body: `Cognito hosted UI authentication`,
    platforms: ['react'],
  },
  {
    href: '/amplify/cognito-admin',
    label: 'Cognito Admin Role',
    body: `Cognito react admin`,
    platforms: ['react'],
  },
  {
    href: '/amplify/cognito-role-rule',
    label: 'Cognito Role Based',
    body: `Cognito fine-granied role based access grant`,
    platforms: ['react'],
  },
].sort(sortByLabel);

export const cdkComponents: ComponentNavItem[] = [
  {
    href: '/cdk/custom-resource',
    label: 'Custom Resource',
    body: `Create a custom resource`,
    platforms: ['react'],
  },
  {
    href: '/cdk/assume-role',
    label: 'Assume Role',
    body: `Hello assume role with CDK`,
    platforms: ['react'],
  },
  {
    href: '/cdk/ssm',
    label: 'System Manager Tunnel',
    body: `Vscode remote connect to a private EC2`,
    platforms: ['react'],
  },
  {
    href: '/cdk/lambda-api',
    label: 'Lambda Based API',
    body: `Build a CI/CD pipepline to deploy lambda based API, event triggers, SQS queue.`,
    platforms: ['react'],
  },
  {
    href: '/cdk/s3-lambda',
    label: 'Lambda Trigger S3',
    body: `Build a CI/CD pipepline to deploy lambda based API, event triggers, SQS queue.`,
    platforms: ['react'],
  },
  {
    href: '/cdk/sqs-lambda',
    label: 'SQS Trigger Lambda',
    body: `Build a CI/CD pipepline to deploy lambda based API, event triggers, SQS queue.`,
    platforms: ['react'],
  },
  {
    href: '/cdk/ecs-fargate',
    label: 'ECS Fargate',
    body: `Experiment ECS Fargate with CDK`,
    platforms: ['react'],
  },
  {
    href: '/cdk/cicd-devicefarm',
    label: 'CI/CD Device Farm',
    body: `Experiment ECS Fargate with CDK`,
    platforms: ['react'],
  },
  {
    href: '/cdk/amplify-iot',
    label: 'Little Amplify IoT',
    body: `Build a sample IoT with CDK and Amplify`,
    platforms: ['react'],
  },
  {
    href: '/cdk/lambda-graviton-x86',
    label: 'Lambda Graviton',
    body: `Benchmark performance between Lambda Graviton and x86`,
    platforms: ['react'],
  },
  {
    href: '/cdk/cicd-ecr-ssm-tag',
    label: 'CI/CD ECR SSM Tag',
    body: `CI/CD Pipeline for Lambda with ECR and SSM for updating tag`,
    platforms: ['react'],
  },
  {
    href: '/cdk/cicd-cross-account',
    label: 'CI/CD Cross Account',
    body: `CI/CD cross acount deploy`,
    platforms: ['react'],
  },
  {
    href: '/cdk/dynamodb-stream-lambda',
    label: 'DyanmoDB Stream',
    body: `DynamoDB stream trigger lambda`,
    platforms: ['react'],
  },
  {
    href: '/cdk/dynamodb-index',
    label: 'DynamoDB Index',
    body: `DynamoDB global secondary index`,
    platforms: ['react'],
  },
  {
    href: '/cdk/cloudfront-s3',
    label: 'CloudFront S3',
    body: `CloudFront S3 host static web`,
    platforms: ['react'],
  },
  {
    href: '/cdk/waf-cloudfront',
    label: 'WAF and CloudFront',
    body: `WAF and CloudFront defense your page`,
    platforms: ['react'],
  },
  {
    href: '/cdk/route-53',
    label: 'route-53',
    body: `Getting started with route 53`,
    platforms: ['react'],
  },
  {
    href: '/cdk/aurora',
    label: 'Aurora',
    body: `Highly availability with ALB, ASG, and Aurora`,
    platforms: ['react'],
  },
  {
    href: '/cdk/cloudfront-waf',
    label: 'CloudFront And Waf',
    body: ' Denfense CloudFront Static Web',
    platforms: ['react'],
  },
  {
    href: '/cdk/api-gateway-lambda',
    label: 'API Gateway and Lambda',
    body: 'API Gateway and Lambda Integration',
    platforms: ['react'],
  },
  {
    href: '/cdk/dax-dynamodb',
    label: 'DAX DynamoDB',
    body: 'DAX DynamoDB',
    platforms: ['react'],
  },
  {
    href: '/cdk/elasticache-redis',
    label: 'ElastiCache for Redis',
    body: 'ElastiCache for Redis',
    platforms: ['react'],
  },
  {
    href: '/cdk/microsoft-sql-to-rds-sql',
    label: 'Microsoft SQL to RDS SQL',
    body: 'Microsoft SQL to RDS SQL',
    platforms: ['react'],
  },
  {
    href: '/cdk/transit-gateway-peering',
    label: 'Transit Gateway Peering',
    body: 'Transit Gateway Peering',
    platforms: ['react'],
  },
  {
    href: '/cdk/transit-gateway-crouter',
    label: 'Transit Gateway Central Router',
    body: 'Transit Gateway Central Router',
    platforms: ['react'],
  },
  {
    href: '/cdk/transit-gateway-simualted-on-prem',
    label: 'Transit Gateway and Simulated On-Prem',
    body: 'Transit Gateway and Simulated On-Prem',
    platforms: ['react'],
  },
  {
    href: '/cdk/redis-dynamodb',
    label: 'Elastic Cache Redis and DynamoDB',
    body: 'Elastic Cache Redis and DynamoDB',
    platforms: ['react'],
  },
  {
    href: '/cdk/microsoft-sql-aurora-migration',
    label: 'Microsoft SQL to Aurora MySQL Migration',
    body: 'Microsoft SQL to Aurora MySQL Migration',
    platforms: ['react'],
  },
  {
    href: '/cdk/hello-ecs-flask',
    label: 'Hello AWS ECS with a FLask Web App',
    body: 'Hello AWS ECS with a Flask Web App',
    platforms: ['react'],
  },
  {
    href: '/cdk/cicd-integration-test',
    label: 'CI/CD Pipeline with Integration Test',
    body: 'CI/CD Pipeline with Integration Test',
    platforms: ['react'],
  },
].sort(sortByLabel);

export const baseComponents: ComponentNavItem[] = [
  {
    href: '/components/view',
    label: 'View',
    body: `View is a container that contains stuff. View is the most abstract component on top of which all other components live.`,
    platforms: ['react'],
  },
  {
    href: '/components/text',
    label: 'Text',
    body: `The Text primitive is used to display simple strings of text in an interface.`,
    platforms: ['react'],
  },
  {
    href: '/components/heading',
    label: 'Heading',
    body: `This is a separate primitive from Text for semantic purposes. The Heading primitive maps to an <h*> tag, and Text maps to a <p> tag.`,
    platforms: ['react'],
  },
  {
    href: '/components/icon',
    label: 'Icon',
    body: `The icon component displays simple vector graphics for use in other components like Buttons.`,
    platforms: ['react'],
  },
  {
    href: '/components/image',
    label: 'Image',
    body: `The Image primitive can be used to display responsive images.`,
    platforms: ['react'],
  },
  {
    href: '/components/divider',
    label: 'Divider',
    body: ``,
    platforms: ['react'],
  },
  {
    href: '/components/scrollview',
    label: 'ScrollView',
    body: `ScrollView is essentially a View that allows scrolling of its inner contents.`,
    platforms: ['react'],
  },
].sort(sortByLabel);

export const connectedComponents = [
  {
    href: '/components/authenticator',
    label: 'Authenticator',
    body: 'The Authenticator component adds complete authentication flows to your application with minimal boilerplate.',
    platforms: ['react', 'vue', 'angular', 'flutter'],
  },
  {
    href: '/components/chatbot',
    label: 'Chatbot',
    body: 'Chatbot automatically renders a complete chat messaging interface that can be used out-of-the-box, or it can be customized using theming support.',
    platforms: ['react', 'vue', 'angular'],
  },
  {
    href: '/components/geo',
    label: 'Geo',
    body: 'Amplify UI Geo provides UI components for maps and location search built on top of Amazon Location Service.',
    platforms: ['react'],
  },
  {
    href: '/components/storage',
    label: 'Storage',
    body: 'A set of components to help interact with S3 storage.',
    platforms: ['react', 'vue', 'angular'],
  },
].sort(sortByLabel);

export const dataDisplayComponents = [
  { href: '/components/badge', label: 'Badge', body: ``, platforms: ['react'] },
  {
    href: '/components/rating',
    label: 'Rating',
    body: 'The Rating component displays a read-only star rating of a product or service.',
    platforms: ['react'],
  },
].sort(sortByLabel);

export const feedbackComponents: ComponentNavItem[] = [
  {
    href: '/components/alert',
    label: 'Alert',
    body: `An Alert displays a brief, important message in a way that attracts the user's attention without interrupting the user's task. Alerts are typically intended to be read out dynamically by a screen reader.`,
    platforms: ['react'],
  },
  {
    href: '/components/pagination',
    label: 'Pagination',
    body: `Pagination provides navigation to allow customers to move between large sets of content that are distributed across multiple pages.`,
    platforms: ['react'],
  },
  {
    href: '/components/placeholder',
    label: 'Placeholder',
    body: `The Placeholder component is used to fill out the interface while content is loaded asynchronously.`,
    platforms: ['react'],
  },
  {
    href: '/components/loader',
    label: 'Loader',
    body: ``,
    platforms: ['react'],
  },
].sort(sortByLabel);

export const inputComponents = [
  {
    href: '/components/textareafield',
    label: 'TextArea Field',
    body: `The TextAreaField form primitive can be used allow users to input multiline text content.`,
    platforms: ['react'],
  },
  {
    href: '/components/textfield',
    label: 'Text Field',
    body: `The TextField form primitive can be used allow users to input text content.`,
    platforms: ['react'],
  },
  {
    href: '/components/selectfield',
    label: 'Select Field',
    body: 'The SelectField primitive allows you to create a drop-down list.',
    platforms: ['react'],
  },
  {
    href: '/components/sliderfield',
    label: 'Slider Field',
    body: ``,
    platforms: ['react'],
  },
  {
    href: '/components/stepperfield',
    label: 'Stepper Field',
    body: `A StepperField is a number input with buttons to increase or decrease the value.`,
    platforms: ['react'],
  },
  {
    href: '/components/searchfield',
    label: 'Search Field',
    body: `SearchField accepts query text for search.`,
    platforms: ['react'],
  },
  {
    href: '/components/passwordfield',
    label: 'Password Field',
    body: ``,
    platforms: ['react'],
  },
  {
    href: '/components/phonenumberfield',
    label: 'Phone Number Field',
    body: ``,
    platforms: ['react'],
  },
  {
    href: '/components/switchfield',
    label: 'Switch Field',
    body: `The SwitchField form primitive is a toggleable input type with a checked (on) and unchecked (off) state.`,
    platforms: ['react'],
  },
  {
    href: '/components/radiogroupfield',
    label: 'Radio Group Field',
    body: `A RadioGroupField allows users to select a single option from a list of mutually exclusive options.`,
    platforms: ['react'],
  },
  {
    href: '/components/checkboxfield',
    label: 'Checkbox Field',
    body: ``,
    platforms: ['react'],
  },
  {
    href: '/components/togglebutton',
    label: 'Toggle Button',
    body: 'A toggle button represents an on/off state for some configuration, for example switching on/off bold text in a text editor.',
    platforms: ['react'],
  },
  {
    href: '/components/button',
    label: 'Button',
    body: ``,
    platforms: ['react'],
  },
].sort(sortByLabel);

export const layoutComponents = [
  {
    href: '/components/card',
    label: 'Card',
    body: ``,
    platforms: ['react'],
  },
  {
    href: '/components/collection',
    label: 'Collection',
    body: ``,
    platforms: ['react'],
  },
  {
    href: '/components/flex',
    label: 'Flex',
    body: `A layout container using Flexbox.`,
    platforms: ['react'],
  },
  {
    href: '/components/grid',
    label: 'Grid',
    body: ``,
    platforms: ['react'],
  },
  {
    href: '/components/table',
    label: 'Table',
    body: `The Table primitive provides users with a styled and customizable table element.`,
    platforms: ['react'],
  },
  {
    href: '/components/expander',
    label: 'Expander',
    body: `The Expander primitive enables users to expand or collapse a set of sections.`,
    platforms: ['react'],
  },
].sort(sortByLabel);

export const navigationComponents: ComponentNavItem[] = [
  {
    href: '/components/link',
    label: 'Link',
    body: ``,
    platforms: ['react'],
  },
  {
    href: '/components/menu',
    label: 'Menu',
    body: ``,
    platforms: ['react'],
  },
  {
    href: '/components/tabs',
    label: 'Tabs',
    body: ``,
    platforms: ['react'],
  },
].sort(sortByLabel);

export const utilityComponents = [
  {
    href: '/components/visuallyhidden',
    label: 'Visually Hidden',
    body: `The Visually Hidden component is used to visually hide content while leaving it available to screen readers.`,
    platforms: ['react'],
  },
].sort(sortByLabel);

export const DISCORD = 'https://discord.gg/amplify';
export const COMMUNITY = 'https://amplify.aws/community';
export const COMMUNITY_EVENTS = 'https://amplify.aws/community/events';
export const COMMUNITY_POSTS = 'https://amplify.aws/community/posts';
export const COMMUNITY_CONTRIBUTORS =
  'https://amplify.aws/community/contributors';
export const COMMUNITY_NEWSLETTERS =
  'https://amplify.aws/community/newsletters';
export const TWITTER = 'https://twitter.com/AWSAmplify';
export const GITHUB = 'https://github.com/aws-amplify';
export const TERMS = 'https://aws.amazon.com/terms/';
export const PRIVACY = 'https://aws.amazon.com/privacy/';
export const MARKETING = 'https://aws.amazon.com/amplify/framework/';
export const AWS_USER_GUIDE =
  'https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html';
export const IOS_REFERENCE = 'https://aws-amplify.github.io/amplify-ios/docs/';
export const ANDROID_REFERENCE =
  'https://aws-amplify.github.io/aws-sdk-android/docs/reference/';
export const JS_REFERENCE = 'https://aws-amplify.github.io/amplify-js/api/';

export const GITHUB_REPO = `${GITHUB}/amplify-ui/`;
export const GITHUB_REPO_FILE = `${GITHUB_REPO}/blob/main/`;
