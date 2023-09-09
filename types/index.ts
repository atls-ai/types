export module atls {
  export interface BaseEntity {
    partitionKey: string;
    rowKey: string;
    timestamp: string;
  }

  export interface JobsEntity extends BaseEntity {
    status: string;
    conversation_id: string;
    message_id: string;
    blob_name: string;
  }

  export interface ChunksEntity extends BaseEntity {
    job_id: string;
    start: number;
    end: number;
    text: string;
    title: string;
    status: string;
    conversation_id: string;
    message_id: string;
    user_id: string;
    summary: string;
  }

  export interface ContextEntity extends BaseEntity {
    conversationId: string;
    messageId: string;
    embeddings: string;
    originalText: string;
    start: number;
    end: number;
  }
  
  export interface UserEntity extends BaseEntity {
    email: string;
    model: string;
    tokens: number;
    name: string;
    conversationId: string;
    paymentLink?: string;
    paymentLinkId?: string;
    salesforceId?: string;
  }
  
  export interface TokenEntity extends BaseEntity {
    completionId: string;
    model: string;
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
    userId: string;
  }
  
  export interface ConversationEntity extends BaseEntity {
    characterId: string;
    title: string;
    userId: string;
  }
  
  export interface CharacterEntity extends BaseEntity {
    name: string;
    summary: string;
    userId: string;
    icon: string;
    color: string;
    welcome: string;
    salesforceId?: string;
  }

  export interface CharacterSubscriptionEntity extends BaseEntity {
    characterId: string;
    userId: string;
    salesforceId?: string;
    role: string;
  }
  
  export interface MessageEntity extends BaseEntity {
    userId: string;
    characterId: string;
    conversationId: string;
    sender: string;
    content: string;
    files?: string;
    status?: string;
    title?: string;
  }

  export type TableEntity = 
  | UserEntity
  | TokenEntity
  | ConversationEntity
  | CharacterEntity
  | MessageEntity
  | ContextEntity
  | ChunksEntity
  | JobsEntity;

  export const tableNames = [
    "Users",
    "Conversations",
    "Characters",
    "Messages",
    "Tokens",
    "Contexts", 
    "Chunks",
    "Jobs",
    "CharacterSubscriptions"
  ] as const;

  export type TableName = typeof tableNames[number];
}

export default atls;
