export interface User {
  id: number;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  suspendedAt?: Date | null;
  deletedAt?: Date | null;
  lastLoginDate?: Date | null;
  username: string;
  pass: string;
  email: string;
  mailStatus: number;  // 1: verified, 2: to be verified
  noticeStatus: number;  // 1: on, 2: off
  followCount: number;
  answerCount: number;
  questionCount: number;
  rank: number;
  status: number;  // 1: available, 10: deleted
  authorityGroup: number;
  displayName: string;
  avatar: string;
  mobile: string;
  bio: string;
  bioHtml: string;
  website: string;
  location: string;
  ipInfo: string;
  isAdmin: number;  // deprecated
}

// 可选的创建用户 DTO 类型（根据需要添加）
export interface CreateUserDto {
  username: string;
  pass: string;
  email: string;
  displayName: string;
  avatar?: string;
  mobile?: string;
  // 其他创建时需要的字段...
}

// 可选的更新用户 DTO 类型
export interface UpdateUserDto {
  displayName?: string;
  avatar?: string;
  mobile?: string;
  bio?: string;
  website?: string;
  location?: string;
  // 其他可更新字段...
}

// 枚举类型定义（如果有明确的固定值）
export enum UserStatus {
  AVAILABLE = 1,
  DELETED = 10
}

export enum MailStatus {
  VERIFIED = 1,
  TO_BE_VERIFIED = 2
}

export enum NoticeStatus {
  ON = 1,
  OFF = 2
}

// 可选的用户查询参数类型
export interface UserQueryParams {
  status?: number;
  username?: string;
  email?: string;
  page?: number;
  limit?: number;
}