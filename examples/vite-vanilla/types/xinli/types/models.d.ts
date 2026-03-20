export namespace XinliModels {
  export type UpdateUserInfo = {
    id?: string;
    createTime?: string;
    accountIds?: string;
    openId?: string;
    name?: string;
    nickName?: string;
    age?: number;
    sex?: "MAN" | "WOMAN" | "UNKNOWN";
    phone?: string;
    password?: string;
    avatarPicPath?: string;
    idNumber?: string;
  };
  export type ResultBoolean = {
    code?: number;
    msg?: string;
    data?: boolean;
  };
  export type UpdateSystemMessage = {
    id?: string;
    createTime?: string;
    userId?: string;
    messageType?: "SYSTEM";
    content?: string;
    status?: "SEND" | "READ" | "UNREAD";
    readTime?: string;
  };
  export type UpdateSurveysParticipant = {
    id?: string;
    createTime?: string;
    surveysId?: string;
    phone?: string;
    name?: string;
    sex?: "MAN" | "WOMAN" | "UNKNOWN";
  };
  export type UpdateSurveys = {
    id?: string;
    createTime?: string;
    institutionId?: string;
    title?: string;
    description?: string;
    status?: "ENABLE" | "DISABLE";
    isRec?: number;
    openTime?: string;
    closeTime?: string;
    openType?: "FULLY_OPEN" | "INSTITUTION_OPEN" | "FIXED_PERSONNEL_OPEN" | "CODE_BASED_OPEN";
    code?: string;
    warningScore?: number;
    image?: string;
    isRepetition?: boolean;
    category?: string;
    isRecommended?: boolean;
  };
  export type SurveysCategoryDto = {
    id?: string;
    createTime?: string;
    title: string;
    sort?: number;
    institutionId?: string;
    status: "ENABLE" | "DISABLE";
    pid?: string;
  };
  export type OptionsDTO = {
    id?: string;
    createTime?: string;
    type?: "QUESTION" | "INFORMATION";
    label?: string;
    value?: string;
    score?: number;
    questionCode?: string;
    code?: string;
    sort?: number;
    preconditionList?: PreconditionDTO[];
  };
  export type PreconditionDTO = {
    id?: string;
    createTime?: string;
    sourceType?: "QUESTION" | "OPTION";
    conditionType?:
      | "TOTAL"
      | "SUM_SCORE"
      | "SUM_SCORE_OR"
      | "INDIVIDUAL_SCORES"
      | "INDIVIDUAL_SCORES_OR"
      | "SELECTED_OPTIONS"
      | "SELECTED_CERTAIN_OPTIONS";
    condition?: "GT" | "LT" | "EQ" | "IN" | "NOT_IN" | "ANY_IN" | "ANY_NOT_IN";
    value?: number;
    optionValue?: string;
    parentCode?: string;
    questionCode?: string;
    surveysId?: string;
  };
  export type QuestionsDTO = {
    id?: string;
    createTime?: string;
    sourceType?: "BANK" | "SURVEY";
    surveysId?: string;
    questionType?: "SINGLE_CHOICE" | "MULTIPLE_CHOICE";
    questionText?: string;
    order?: number;
    required?: boolean;
    status?: "ENABLE" | "DISABLE";
    categoryId?: string;
    categoryName?: string;
    code?: string;
    surveysTitle?: string;
    optionList?: OptionsDTO[];
    preconditionList?: PreconditionDTO[];
  };
  export type UpdateQuestions = {
    id?: string;
    createTime?: string;
    sourceType?: "BANK" | "SURVEY";
    surveysId?: string;
    questionType?: "SINGLE_CHOICE" | "MULTIPLE_CHOICE";
    questionText?: string;
    order?: number;
    required?: boolean;
    status?: "ENABLE" | "DISABLE";
    categoryId?: string;
    code?: string;
  };
  export type UpdatePrecondition = {
    id?: string;
    createTime?: string;
    sourceType?: "QUESTION" | "OPTION";
    conditionType?:
      | "TOTAL"
      | "SUM_SCORE"
      | "SUM_SCORE_OR"
      | "INDIVIDUAL_SCORES"
      | "INDIVIDUAL_SCORES_OR"
      | "SELECTED_OPTIONS"
      | "SELECTED_CERTAIN_OPTIONS";
    condition?: "GT" | "LT" | "EQ" | "IN" | "NOT_IN" | "ANY_IN" | "ANY_NOT_IN";
    value?: number;
    optionValue?: string;
    parentCode?: string;
    questionCode?: string;
    surveysId?: string;
  };
  export type UpdateOptions = {
    id?: string;
    createTime?: string;
    type?: "QUESTION" | "INFORMATION";
    label?: string;
    value?: string;
    score?: number;
    questionCode?: string;
    code?: string;
  };
  export type UpdateInstitution = {
    id?: string;
    createTime?: string;
    accountId?: string;
    insName?: string;
    address?: string;
    contactPerson?: string;
    contactPhone?: string;
    images?: string;
    auditStatus?: "WAIT" | "PASS" | "FAIL";
    reason?: string;
    maxNumber?: number;
    parentCode?: string;
    isSign?: boolean;
    code?: string;
    introduce?: string;
    business?: string;
    idCardFont?: string;
    idCardBack?: string;
    qualifications?: string;
    userId?: string;
  };
  export type InformationQuestionsDTO = {
    id?: string;
    createTime?: string;
    surveysId?: string;
    order?: number;
    questionType?: "SINGLE_CHOICE" | "MULTIPLE_CHOICE";
    questionText?: string;
    required?: boolean;
    code?: string;
    status?: "ENABLE" | "DISABLE";
    optionList?: OptionsDTO[];
  };
  export type UpdateInformationQuestions = {
    id?: string;
    createTime?: string;
    surveysId?: string;
    order?: number;
    questionType?: "SINGLE_CHOICE" | "MULTIPLE_CHOICE";
    questionText?: string;
    required?: boolean;
    code?: string;
    status?: "ENABLE" | "DISABLE";
  };
  export type UpdateInformationCollection = {
    id?: string;
    createTime?: string;
    userId?: string;
    surveysId?: string;
    responseContent?: string;
  };
  export type UpdateDoctor = {
    id?: string;
    createTime?: string;
    name?: string;
    institutionId?: string;
    isOnline?: boolean;
    label?: string;
    level?: string;
    specialty?: string;
    introduction?: string;
    serviceFee?: number;
    address?: string;
    serviceHours?: number;
    serviceCount?: number;
    entryTime?: string;
    onlineHours?: number;
    logoutTime?: string;
    loginTime?: string;
    reason?: string;
    idCardFont: string;
    idCardBack: string;
    qualifications?: string;
    phone: string;
    avatar?: string;
  };
  export type CourseTypeDto = {
    id?: string;
    createTime?: string;
    title: string;
    institutionId?: string;
    sort?: number;
    pid?: string;
  };
  export type CourseResourcesDto = {
    id?: string;
    createTime?: string;
    courseId: string;
    title: string;
    description?: string;
    duration?: number;
    annex?: string;
    resourceUrl: string;
    institutionId?: string;
    isOpen: boolean;
  };
  export type UpdateCategory = {
    id?: string;
    createTime?: string;
    name?: string;
    description?: string;
    parentId?: string;
    institutionId?: string;
  };
  export type UpdateAnswers = {
    id?: string;
    createTime?: string;
    userId?: string;
    surveysId?: string;
    totalScore?: number;
    answer?: string;
  };
  export type UpdateAnswerScoreRanges = {
    id?: string;
    createTime?: string;
    surveysId?: string;
    dimension?: string;
    minScore?: number;
    maxScore?: number;
    conclusion?: string;
    analysis?: string;
    recommendation?: string;
  };
  export type UpdateAccount = {
    id?: string;
    createTime?: string;
    roleIds?: string;
    userName?: string;
    type?: "ADMIN" | "INSTITUTION" | "DOCTOR" | "USER";
    nickName?: string;
    phone?: string;
    idNumber?: string;
    avatarPicPath?: string;
    menuIds?: string;
    sex?: "MAN" | "WOMAN" | "UNKNOWN";
    age?: number;
    desc?: string;
  };
  export type UsernamePassword = {
    username: string;
    password: string;
    rsaPassword?: string;
    code?: string;
    storeId?: string;
    openId?: string;
    remainCount?: number;
  };
  export type UpdateRole = {
    id?: string;
    createTime?: string;
    roleName?: string;
    roleCode?: string;
    menuIds?: string;
  };
  export type UpdateMenus = {
    id?: string;
    createTime?: string;
    name?: string;
    type?: "MENU" | "FEATURE" | "GROUP" | "FUNCTION";
    code?: string;
    parentId?: string;
    urlAddress?: string;
    icon?: string;
    sort?: number;
    path?: string;
    title?: string;
    component?: string;
    parentName?: string;
    redirect?: string;
    weight?: number;
    isHidden?: boolean;
    isCache?: boolean;
    isDisabled?: boolean;
    isInline?: boolean;
    openType?: "NONE" | "COMPONENT" | "OUT_LINK" | "INNER_LINK";
  };
  export type UpdateLevelConfig = {
    id?: string;
    createTime?: string;
    level?: string;
    serviceHours?: number;
    serviceCount?: number;
    workingYears?: number;
    onlineHours?: number;
  };
  export type UpdateFeedback = {
    id?: string;
    createTime?: string;
    accountId?: string;
    userId?: string;
    status?: "PENDING" | "ACCEPTED" | "CLOSED";
    description?: string;
    acceptedTime?: string;
    reply?: string;
    type?: string;
  };
  export type UpdateSysDictType = {
    id?: string;
    createTime?: string;
    updateTime?: string;
    name?: string;
    code?: string;
    status?: "ENABLE" | "DISABLE";
    remark?: string;
  };
  export type UpdateSysDictData = {
    id?: string;
    createTime?: string;
    updateTime?: string;
    parentId?: string;
    name?: string;
    dictSort?: number;
    code?: string;
    color?: string;
    logo?: string;
    status?: "ENABLE" | "DISABLE";
    remark?: string;
  };
  export type CourseDto = {
    id?: string;
    createTime?: string;
    title: string;
    description?: string;
    price: number;
    isActive: boolean;
    isRec: boolean;
    isTop: boolean;
    startTime?: string;
    endTime?: string;
    salesCount?: number;
    salesAmount?: number;
    type: string;
    institutionId?: string;
    coverImg?: string;
  };
  export type UpdateSysConfig = {
    id?: string;
    createTime?: string;
    updateTime?: string;
    type?: number;
    name?: string;
    content?: string;
  };
  export type UpdateBanner = {
    id?: string;
    createTime?: string;
    imageUrl?: string;
    linkUrl?: string;
    description?: string;
    order?: number;
  };
  export type UpdateAuditLog = {
    id?: string;
    createTime?: string;
    applicantId?: string;
    auditorId?: string;
    content?: string;
    type?: "INSTITUTION" | "DOCTOR";
    reason?: string;
    userName?: string;
    userPassword?: string;
    count?: number;
  };
  export type UpdateArticle = {
    id?: string;
    createTime?: string;
    title?: string;
    content?: string;
    type?: string;
    status?: "ENABLE" | "DISABLE";
    subhead?: string;
    pageViews?: number;
    annex?: string;
    image?: string;
  };
  export type UpdateAnnouncement = {
    id?: string;
    createTime?: string;
    title?: string;
    content?: string;
    isActive?: boolean;
    startTime?: string;
    endTime?: string;
    isTop?: number;
    type?: string;
    image?: string;
    subhead?: string;
    annex?: string;
  };
  export type UserInfoDTO = {
    id?: string;
    createTime?: string;
    accountIds?: string;
    openId?: string;
    name: string;
    nickName?: string;
    age?: number;
    sex?: "MAN" | "WOMAN" | "UNKNOWN";
    phone: string;
    isVip?: boolean;
    password?: string;
    avatarPicPath?: string;
    idNumber?: string;
  };
  export type ResultUserInfoDTO = {
    code?: number;
    msg?: string;
    data?: UserInfoDTO;
  };
  export type ResultMapStringString = {
    code?: number;
    msg?: string;
    data?: Record<string, string>;
  };
  export type SystemMessageDTO = {
    id?: string;
    createTime?: string;
    userId?: string;
    messageType?: "SYSTEM";
    content?: string;
    status?: "SEND" | "READ" | "UNREAD";
    readTime?: string;
    userName?: string;
  };
  export type ResultListSystemMessageDTO = {
    code?: number;
    msg?: string;
    data?: SystemMessageDTO[];
  };
  export type ResultSystemMessageDTO = {
    code?: number;
    msg?: string;
    data?: SystemMessageDTO;
  };
  export type SurveysParticipantDTO = {
    id?: string;
    createTime?: string;
    surveysId?: string;
    phone?: string;
    name?: string;
    sex?: "MAN" | "WOMAN" | "UNKNOWN";
    status?: "WAIT" | "COMPLETE" | "NOT_COMPLETE";
  };
  export type ResultListSurveysParticipantDTO = {
    code?: number;
    msg?: string;
    data?: SurveysParticipantDTO[];
  };
  export type ResultSurveysParticipantDTO = {
    code?: number;
    msg?: string;
    data?: SurveysParticipantDTO;
  };
  export type SurveysDTO = {
    id?: string;
    createTime?: string;
    institutionId?: string;
    title?: string;
    description?: string;
    status?: "ENABLE" | "DISABLE";
    isRec?: number;
    openTime?: string;
    closeTime?: string;
    openType?: "FULLY_OPEN" | "INSTITUTION_OPEN" | "FIXED_PERSONNEL_OPEN" | "CODE_BASED_OPEN";
    code?: string;
    warningScore?: number;
    image?: string;
    isRepetition?: boolean;
    insName?: string;
    isRecommended?: boolean;
    category: string;
    categoryName?: string;
    preconditionDtoList?: PreconditionDTO[];
    joinStatus?: "WAIT" | "COMPLETE" | "NOT_COMPLETE";
    joinNum?: number;
  };
  export type ResultSurveysDTO = {
    code?: number;
    msg?: string;
    data?: SurveysDTO;
  };
  export type ResultSurveysCategoryDto = {
    code?: number;
    msg?: string;
    data?: SurveysCategoryDto;
  };
  export type ResultListQuestionsDTO = {
    code?: number;
    msg?: string;
    data?: QuestionsDTO[];
  };
  export type ResultQuestionsDTO = {
    code?: number;
    msg?: string;
    data?: QuestionsDTO;
  };
  export type ResultListPreconditionDTO = {
    code?: number;
    msg?: string;
    data?: PreconditionDTO[];
  };
  export type ResultPreconditionDTO = {
    code?: number;
    msg?: string;
    data?: PreconditionDTO;
  };
  export type ResultListOptionsDTO = {
    code?: number;
    msg?: string;
    data?: OptionsDTO[];
  };
  export type ResultOptionsDTO = {
    code?: number;
    msg?: string;
    data?: OptionsDTO;
  };
  export type ResultListInformationQuestionsDTO = {
    code?: number;
    msg?: string;
    data?: InformationQuestionsDTO[];
  };
  export type ResultInformationQuestionsDTO = {
    code?: number;
    msg?: string;
    data?: InformationQuestionsDTO;
  };
  export type Content = {
    questionCode: string;
    questionsDTO?: QuestionsDTO;
    optionCodeList: string[];
    optionsDTOList?: OptionsDTO[];
    content?: string;
    type: "XZ" | "TK";
  };
  export type InformationCollectionDTO = {
    id?: string;
    createTime?: string;
    userId?: string;
    surveysId?: string;
    responseContent?: string;
    title?: string;
    userName?: string;
    contentList?: Content[];
  };
  export type ResultListInformationCollectionDTO = {
    code?: number;
    msg?: string;
    data?: InformationCollectionDTO[];
  };
  export type ResultInformationCollectionDTO = {
    code?: number;
    msg?: string;
    data?: InformationCollectionDTO;
  };
  export type ResultListUploadResultDTO = {
    code?: number;
    msg?: string;
    data?: UploadResultDTO[];
  };
  export type UploadResultDTO = {
    originalFileName?: string;
    savePath?: string;
  };
  export type UploadBase64DTO = {
    parentPath?: string;
    fileName?: string;
    ext: string;
    base64: string;
  };
  export type ResultUploadResultDTO = {
    code?: number;
    msg?: string;
    data?: UploadResultDTO;
  };
  export type DoctorDTO = {
    id?: string;
    createTime?: string;
    name: string;
    idCard: string;
    phone: string;
    job: string;
    specialty: string;
    institutionId?: string;
    address?: string;
    introduction: string;
    idCardFont: string;
    idCardBack: string;
    qualifications?: string;
    serviceFee: number;
    applicationType?: "SYSTEM" | "PERSONAL";
    status?: "ENABLE" | "DISABLE";
    isOnline?: boolean;
    auditStatus?: "WAIT" | "PASS" | "FAIL";
    label?: string;
    level?: string;
    serviceHours?: number;
    serviceCount?: number;
    entryTime: string;
    onlineHours?: number;
    logoutTime?: string;
    loginTime?: string;
    userId?: string;
    reason?: string;
    userPassword?: string;
    institutionName?: string;
    avatar?: string;
    roleIds?: string;
    accountId?: string;
    sex: "MAN" | "WOMAN" | "UNKNOWN";
  };
  export type ResultDoctorDTO = {
    code?: number;
    msg?: string;
    data?: DoctorDTO;
  };
  export type DoctorEnterAuditDto = {
    doctorId: string;
    auditStatus: "WAIT" | "PASS" | "FAIL";
    password?: string;
    serviceFee?: number;
    roleIds?: string;
    reason?: string;
  };
  export type ResultCourseTypeDto = {
    code?: number;
    msg?: string;
    data?: CourseTypeDto;
  };
  export type ResultCourseResourcesDto = {
    code?: number;
    msg?: string;
    data?: CourseResourcesDto;
  };
  export type CategoryDTO = {
    id?: string;
    createTime?: string;
    name?: string;
    description?: string;
    parentId?: string;
    institutionId?: string;
    insName?: string;
  };
  export type ResultListCategoryDTO = {
    code?: number;
    msg?: string;
    data?: CategoryDTO[];
  };
  export type ResultCategoryDTO = {
    code?: number;
    msg?: string;
    data?: CategoryDTO;
  };
  export type AnswersDTO = {
    id?: string;
    createTime?: string;
    userId?: string;
    surveysId?: string;
    totalScore?: number;
    answer?: string;
    userName?: string;
    title?: string;
    dimension?: string;
    conclusion?: string;
    analysis?: string;
    recommendation?: string;
  };
  export type ResultListAnswersDTO = {
    code?: number;
    msg?: string;
    data?: AnswersDTO[];
  };
  export type ResultAnswersDTO = {
    code?: number;
    msg?: string;
    data?: AnswersDTO;
  };
  export type AnswerScoreRangesDTO = {
    id?: string;
    createTime?: string;
    surveysId?: string;
    dimension?: string;
    minScore?: number;
    maxScore?: number;
    conclusion?: string;
    analysis?: string;
    recommendation?: string;
    title?: string;
  };
  export type ResultListAnswerScoreRangesDTO = {
    code?: number;
    msg?: string;
    data?: AnswerScoreRangesDTO[];
  };
  export type ResultAnswerScoreRangesDTO = {
    code?: number;
    msg?: string;
    data?: AnswerScoreRangesDTO;
  };
  export type ResultString = {
    code?: number;
    msg?: string;
    data?: string;
  };
  export type AccountInfoDTO = {
    id?: string;
    createTime?: string;
    roleIds: string;
    userName: string;
    userPassword: string;
    type: "ADMIN" | "INSTITUTION" | "DOCTOR" | "USER";
    nickName: string;
    phone?: string;
    idNumber?: string;
    lastLoginTime?: string;
    lastLoginIp?: string;
    status?: "ENABLE" | "DISABLE";
    loginErrorCount?: number;
    loginErrorTime?: string;
    avatarPicPath?: string;
    menuIds?: string;
    sex?: "MAN" | "WOMAN" | "UNKNOWN";
    age?: number;
    desc?: string;
    roleName?: string[];
    lock?: boolean;
  };
  export type ResultAccountInfoDTO = {
    code?: number;
    msg?: string;
    data?: AccountInfoDTO;
  };
  export type ResultListSurveysDTO = {
    code?: number;
    msg?: string;
    data?: SurveysDTO[];
  };
  export type ResultListRoleDTO = {
    code?: number;
    msg?: string;
    data?: RoleDTO[];
  };
  export type RoleDTO = {
    id?: string;
    createTime?: string;
    roleName: string;
    roleCode: string;
    menuIds: string;
    status?: "ENABLE" | "DISABLE";
  };
  export type ResultRoleDTO = {
    code?: number;
    msg?: string;
    data?: RoleDTO;
  };
  export type MenusDTO = {
    id?: string;
    createTime?: string;
    name?: string;
    type: "MENU" | "FEATURE" | "GROUP" | "FUNCTION";
    code?: string;
    parentId?: string;
    urlAddress?: string;
    icon?: string;
    sort: number;
    path?: string;
    title: string;
    component?: string;
    parentName: string;
    redirect?: string;
    weight: number;
    isHidden: boolean;
    isCache: boolean;
    isDisabled: boolean;
    isInline: boolean;
    openType?: "NONE" | "COMPONENT" | "OUT_LINK" | "INNER_LINK";
  };
  export type ResultListMenusDTO = {
    code?: number;
    msg?: string;
    data?: MenusDTO[];
  };
  export type ResultMenusDTO = {
    code?: number;
    msg?: string;
    data?: MenusDTO;
  };
  export type LogInfoDTO = {
    id?: string;
    createTime?: string;
    type?: "LOGIN" | "EXCEPTION" | "OPERATION";
    ipAddress?: string;
    url?: string;
    message?: string;
  };
  export type ResultListLogInfoDTO = {
    code?: number;
    msg?: string;
    data?: LogInfoDTO[];
  };
  export type LevelConfigDTO = {
    id?: string;
    createTime?: string;
    level?: string;
    serviceHours?: number;
    serviceCount?: number;
    workingYears?: number;
    onlineHours?: number;
  };
  export type ResultListLevelConfigDTO = {
    code?: number;
    msg?: string;
    data?: LevelConfigDTO[];
  };
  export type ResultLevelConfigDTO = {
    code?: number;
    msg?: string;
    data?: LevelConfigDTO;
  };
  export type InstitutionDTO = {
    id?: string;
    createTime?: string;
    accountId?: string;
    insName?: string;
    address?: string;
    contactPerson?: string;
    contactPhone?: string;
    images?: string;
    auditStatus?: "WAIT" | "PASS" | "FAIL";
    reason?: string;
    maxNumber?: number;
    parentCode?: string;
    isSign?: boolean;
    userId?: string;
    userName?: string;
    userPassword?: string;
    code?: string;
    introduce: string;
    business: string;
    roleIds?: string;
    idCardFont: string;
    idCardBack: string;
    qualifications?: string;
    applicationType?: "SYSTEM" | "PERSONAL";
  };
  export type ResultInstitutionDTO = {
    code?: number;
    msg?: string;
    data?: InstitutionDTO;
  };
  export type InstitutionEnterAuditDto = {
    institutionId: string;
    auditStatus: "WAIT" | "PASS" | "FAIL";
    userName?: string;
    password?: string;
    roleIds?: string;
    reason?: string;
    code: string;
  };
  export type FeedbackDTO = {
    id?: string;
    createTime?: string;
    accountId?: string;
    userId?: string;
    status?: "PENDING" | "ACCEPTED" | "CLOSED";
    description?: string;
    acceptedTime?: string;
    reply?: string;
    type: string;
    accountName?: string;
    userName?: string;
  };
  export type ResultListFeedbackDTO = {
    code?: number;
    msg?: string;
    data?: FeedbackDTO[];
  };
  export type ResultFeedbackDTO = {
    code?: number;
    msg?: string;
    data?: FeedbackDTO;
  };
  export type SysDictTypeDTO = {
    id?: string;
    createTime?: string;
    updateTime?: string;
    name: string;
    code: string;
    status?: "ENABLE" | "DISABLE";
    remark?: string;
  };
  export type ResultSysDictTypeDTO = {
    code?: number;
    msg?: string;
    data?: SysDictTypeDTO;
  };
  export type SysDictDataDTO = {
    id?: string;
    createTime?: string;
    updateTime?: string;
    parentId?: string;
    name?: string;
    dictSort?: number;
    code?: string;
    color?: string;
    logo?: string;
    status?: "ENABLE" | "DISABLE";
    remark?: string;
  };
  export type ResultSysDictDataDTO = {
    code?: number;
    msg?: string;
    data?: SysDictDataDTO;
  };
  export type ResultCourseDto = {
    code?: number;
    msg?: string;
    data?: CourseDto;
  };
  export type SysConfigStoreCity = {
    cityName: string;
    cityCode: string;
    parentCode?: string;
  };
  export type SysConfigBasicInfo = {
    siteName?: string;
    recordNumber?: string;
    version?: string;
    logo?: string;
    appId?: string;
    appSecret?: string;
    mapLocationKey?: string;
    defaultRating?: string;
    shareTitle?: string;
    shareImage?: string;
    paymentDuration?: string;
    settlementDuration?: string;
  };
  export type SysConfigDTO = {
    id?: string;
    createTime?: string;
    updateTime?: string;
    type?: number;
    name?: string;
    content?: string;
  };
  export type ResultListSysConfigDTO = {
    code?: number;
    msg?: string;
    data?: SysConfigDTO[];
  };
  export type ResultSysConfigDTO = {
    code?: number;
    msg?: string;
    data?: SysConfigDTO;
  };
  export type BannerDTO = {
    id?: string;
    createTime?: string;
    imageUrl?: string;
    linkUrl?: string;
    description?: string;
    order?: number;
    type: "NORMAL" | "N_LIAN" | "W_LIAN";
    content?: string;
  };
  export type ResultListBannerDTO = {
    code?: number;
    msg?: string;
    data?: BannerDTO[];
  };
  export type ResultBannerDTO = {
    code?: number;
    msg?: string;
    data?: BannerDTO;
  };
  export type AuditLogDTO = {
    id?: string;
    createTime?: string;
    applicantId?: string;
    auditorId?: string;
    content?: string;
    type?: "INSTITUTION" | "DOCTOR";
    reason?: string;
    applicantName?: string;
    auditorName?: string;
    userName?: string;
    userPassword?: string;
    count?: number;
  };
  export type ResultListAuditLogDTO = {
    code?: number;
    msg?: string;
    data?: AuditLogDTO[];
  };
  export type ResultAuditLogDTO = {
    code?: number;
    msg?: string;
    data?: AuditLogDTO;
  };
  export type ArticleDTO = {
    id?: string;
    createTime?: string;
    title?: string;
    content?: string;
    type?: string;
    status?: "ENABLE" | "DISABLE";
    subhead?: string;
    pageViews?: number;
    typeName?: string;
    annex?: string;
    image?: string;
  };
  export type ResultListArticleDTO = {
    code?: number;
    msg?: string;
    data?: ArticleDTO[];
  };
  export type ResultArticleDTO = {
    code?: number;
    msg?: string;
    data?: ArticleDTO;
  };
  export type AnnouncementDTO = {
    id?: string;
    createTime?: string;
    title?: string;
    content?: string;
    isActive?: boolean;
    startTime?: string;
    endTime?: string;
    isTop?: number;
    type?: string;
    image?: string;
    subhead?: string;
    annex?: string;
  };
  export type ResultListAnnouncementDTO = {
    code?: number;
    msg?: string;
    data?: AnnouncementDTO[];
  };
  export type ResultAnnouncementDTO = {
    code?: number;
    msg?: string;
    data?: AnnouncementDTO;
  };
  export type UserInfoPageQuery = {
    pageIndex: number;
    pageSize?: number;
    id?: string;
    accountId?: string;
    openId?: string;
    age?: number;
    sex?: "MAN" | "WOMAN" | "UNKNOWN";
    isVip?: boolean;
    startTime?: string;
    endTime?: string;
    keyword?: string;
  };
  export type BasePageUserInfoDTO = {
    total?: number;
    list?: UserInfoDTO[];
  };
  export type ResultBasePageUserInfoDTO = {
    code?: number;
    msg?: string;
    data?: BasePageUserInfoDTO;
  };
  export type SystemMessagePageQuery = {
    pageIndex: number;
    pageSize?: number;
    id?: string;
    userId?: string;
    messageType?: "SYSTEM";
    status?: "SEND" | "READ" | "UNREAD";
    keyword?: string;
  };
  export type BasePageSystemMessageDTO = {
    total?: number;
    list?: SystemMessageDTO[];
  };
  export type ResultBasePageSystemMessageDTO = {
    code?: number;
    msg?: string;
    data?: BasePageSystemMessageDTO;
  };
  export type SurveysParticipantPageQuery = {
    pageIndex: number;
    pageSize?: number;
    id?: string;
    surveysId?: string;
    sex?: "MAN" | "WOMAN" | "UNKNOWN";
    keyword?: string;
  };
  export type BasePageSurveysParticipantDTO = {
    total?: number;
    list?: SurveysParticipantDTO[];
  };
  export type ResultBasePageSurveysParticipantDTO = {
    code?: number;
    msg?: string;
    data?: BasePageSurveysParticipantDTO;
  };
  export type SurveysPageQuery = {
    pageIndex: number;
    pageSize?: number;
    id?: string;
    keyword?: string;
    institutionId?: string;
    status?: "ENABLE" | "DISABLE";
    openTime?: string;
    closeTime?: string;
    openType?: "FULLY_OPEN" | "INSTITUTION_OPEN" | "FIXED_PERSONNEL_OPEN" | "CODE_BASED_OPEN";
    code?: string;
    isRec?: number;
    isRecommended?: boolean;
    category?: string;
  };
  export type BasePageSurveysDTO = {
    total?: number;
    list?: SurveysDTO[];
  };
  export type ResultBasePageSurveysDTO = {
    code?: number;
    msg?: string;
    data?: BasePageSurveysDTO;
  };
  export type ResultSurveyDetails = {
    code?: number;
    msg?: string;
    data?: SurveyDetails;
  };
  export type SurveyDetails = {
    id?: string;
    createTime?: string;
    institutionId?: string;
    title?: string;
    description?: string;
    status?: "ENABLE" | "DISABLE";
    isRec?: number;
    openTime?: string;
    closeTime?: string;
    openType?: "FULLY_OPEN" | "INSTITUTION_OPEN" | "FIXED_PERSONNEL_OPEN" | "CODE_BASED_OPEN";
    code?: string;
    warningScore?: number;
    image?: string;
    isRepetition?: boolean;
    questions?: QuestionsDTO[];
  };
  export type SurveysCategoryPageQuery = {
    pageIndex: number;
    pageSize?: number;
    id?: string;
    title?: string;
    institutionId?: string;
    status?: "ENABLE" | "DISABLE";
    pid?: number;
  };
  export type BasePageSurveysCategoryDto = {
    total?: number;
    list?: SurveysCategoryDto[];
  };
  export type ResultBasePageSurveysCategoryDto = {
    code?: number;
    msg?: string;
    data?: BasePageSurveysCategoryDto;
  };
  export type ResultListSurveysCategoryDto = {
    code?: number;
    msg?: string;
    data?: SurveysCategoryDto[];
  };
  export type QuestionsPageQuery = {
    pageIndex: number;
    pageSize?: number;
    id?: string;
    sourceType?: "BANK" | "SURVEY";
    surveysId?: string;
    keyword?: string;
    questionType?: "SINGLE_CHOICE" | "MULTIPLE_CHOICE";
    status?: "ENABLE" | "DISABLE";
    categoryId?: string;
    questionText?: string;
    code?: string;
    order?: number;
    required?: boolean;
  };
  export type BasePageQuestionsDTO = {
    total?: number;
    list?: QuestionsDTO[];
  };
  export type ResultBasePageQuestionsDTO = {
    code?: number;
    msg?: string;
    data?: BasePageQuestionsDTO;
  };
  export type PreconditionPageQuery = {
    pageIndex: number;
    pageSize?: number;
    id?: string;
    sourceType?: "QUESTION" | "OPTION";
    conditionType?:
      | "TOTAL"
      | "SUM_SCORE"
      | "SUM_SCORE_OR"
      | "INDIVIDUAL_SCORES"
      | "INDIVIDUAL_SCORES_OR"
      | "SELECTED_OPTIONS"
      | "SELECTED_CERTAIN_OPTIONS";
    condition?: "GT" | "LT" | "EQ" | "IN" | "NOT_IN" | "ANY_IN" | "ANY_NOT_IN";
    value?: number;
    optionValue?: string;
    parentCode?: string;
    questionCode?: string;
    surveysId?: string;
  };
  export type BasePagePreconditionDTO = {
    total?: number;
    list?: PreconditionDTO[];
  };
  export type ResultBasePagePreconditionDTO = {
    code?: number;
    msg?: string;
    data?: BasePagePreconditionDTO;
  };
  export type OptionsPageQuery = {
    pageIndex: number;
    pageSize?: number;
    id?: string;
    type?: "QUESTION" | "INFORMATION";
    label?: string;
    value?: string;
    score?: number;
    questionCode?: string;
    code?: string;
  };
  export type BasePageOptionsDTO = {
    total?: number;
    list?: OptionsDTO[];
  };
  export type ResultBasePageOptionsDTO = {
    code?: number;
    msg?: string;
    data?: BasePageOptionsDTO;
  };
  export type MenusPageQuery = {
    pageIndex: number;
    pageSize?: number;
    id?: string;
    type?: "MENU" | "FEATURE" | "GROUP" | "FUNCTION";
    parentId?: string;
    sort?: number;
    weight?: number;
    isHidden?: boolean;
    isCache?: boolean;
    isDisabled?: boolean;
    isInline?: boolean;
    keyword?: string;
  };
  export type BasePageMenusDTO = {
    total?: number;
    list?: MenusDTO[];
  };
  export type ResultBasePageMenusDTO = {
    code?: number;
    msg?: string;
    data?: BasePageMenusDTO;
  };
  export type InstitutionPageQuery = {
    pageIndex: number;
    pageSize?: number;
    id?: string;
    keyword?: string;
    accountId?: string;
    auditStatus?: "WAIT" | "PASS" | "FAIL";
    parentCode?: string;
    applicationType?: "SYSTEM" | "PERSONAL";
    isSign?: boolean;
  };
  export type BasePageInstitutionDTO = {
    total?: number;
    list?: InstitutionDTO[];
  };
  export type ResultBasePageInstitutionDTO = {
    code?: number;
    msg?: string;
    data?: BasePageInstitutionDTO;
  };
  export type InformationQuestionsPageQuery = {
    pageIndex: number;
    pageSize?: number;
    id?: string;
    surveysId?: string;
    questionType?: "SINGLE_CHOICE" | "MULTIPLE_CHOICE";
    status?: "ENABLE" | "DISABLE";
  };
  export type BasePageInformationQuestionsDTO = {
    total?: number;
    list?: InformationQuestionsDTO[];
  };
  export type ResultBasePageInformationQuestionsDTO = {
    code?: number;
    msg?: string;
    data?: BasePageInformationQuestionsDTO;
  };
  export type InformationCollectionPageQuery = {
    pageIndex: number;
    pageSize?: number;
    id?: string;
    userId?: string;
    surveysId?: string;
    keyword?: string;
  };
  export type BasePageInformationCollectionDTO = {
    total?: number;
    list?: InformationCollectionDTO[];
  };
  export type ResultBasePageInformationCollectionDTO = {
    code?: number;
    msg?: string;
    data?: BasePageInformationCollectionDTO;
  };
  export type DoctorPageQuery = {
    pageIndex: number;
    pageSize?: number;
    id?: string;
    keyword?: string;
    institutionId?: string;
    isOnline?: boolean;
    auditStatus?: "WAIT" | "PASS" | "FAIL";
    userId?: string;
    applicationType?: "SYSTEM" | "PERSONAL";
    status?: "ENABLE" | "DISABLE";
  };
  export type BasePageDoctorDTO = {
    total?: number;
    list?: DoctorDTO[];
  };
  export type ResultBasePageDoctorDTO = {
    code?: number;
    msg?: string;
    data?: BasePageDoctorDTO;
  };
  export type SysDictTypePageQuery = {
    pageIndex: number;
    pageSize?: number;
    id?: string;
    status?: "ENABLE" | "DISABLE";
    keyword?: string;
  };
  export type BasePageSysDictTypeDTO = {
    total?: number;
    list?: SysDictTypeDTO[];
  };
  export type ResultBasePageSysDictTypeDTO = {
    code?: number;
    msg?: string;
    data?: BasePageSysDictTypeDTO;
  };
  export type SysDictDataPageQuery = {
    pageIndex: number;
    pageSize?: number;
    id?: string;
    parentId?: string;
    status?: "ENABLE" | "DISABLE";
    keyword?: string;
  };
  export type BasePageSysDictDataDTO = {
    total?: number;
    list?: SysDictDataDTO[];
  };
  export type ResultBasePageSysDictDataDTO = {
    code?: number;
    msg?: string;
    data?: BasePageSysDictDataDTO;
  };
  export type CourseTypePageQuery = {
    pageIndex: number;
    pageSize?: number;
    id?: string;
    title?: string;
    institutionId?: string;
    pid?: string;
  };
  export type BasePageCourseTypeDto = {
    total?: number;
    list?: CourseTypeDto[];
  };
  export type ResultBasePageCourseTypeDto = {
    code?: number;
    msg?: string;
    data?: BasePageCourseTypeDto;
  };
  export type CourseResourcesPageQuery = {
    pageIndex: number;
    pageSize?: number;
    id?: string;
    courseId?: string;
    title?: string;
    duration?: number;
    institutionId?: string;
    isOpen?: boolean;
    keyword?: string;
  };
  export type BasePageCourseResourcesDto = {
    total?: number;
    list?: CourseResourcesDto[];
  };
  export type ResultBasePageCourseResourcesDto = {
    code?: number;
    msg?: string;
    data?: BasePageCourseResourcesDto;
  };
  export type ResultMapStringObject = {
    code?: number;
    msg?: string;
    data?: Record<string, Record<string, any>>;
  };
  export type CategoryPageQuery = {
    pageIndex: number;
    pageSize?: number;
    id?: string;
    parentId?: string;
    institutionId?: string;
    keyword?: string;
  };
  export type BasePageCategoryDTO = {
    total?: number;
    list?: CategoryDTO[];
  };
  export type ResultBasePageCategoryDTO = {
    code?: number;
    msg?: string;
    data?: BasePageCategoryDTO;
  };
  export type AnswersPageQuery = {
    pageIndex: number;
    pageSize?: number;
    id?: string;
    userId?: string;
    surveysId?: string;
    keyword?: string;
  };
  export type BasePageAnswersDTO = {
    total?: number;
    list?: AnswersDTO[];
  };
  export type ResultBasePageAnswersDTO = {
    code?: number;
    msg?: string;
    data?: BasePageAnswersDTO;
  };
  export type AnswerScoreRangesPageQuery = {
    pageIndex: number;
    pageSize?: number;
    id?: string;
    surveysId?: string;
    keyword?: string;
  };
  export type BasePageAnswerScoreRangesDTO = {
    total?: number;
    list?: AnswerScoreRangesDTO[];
  };
  export type ResultBasePageAnswerScoreRangesDTO = {
    code?: number;
    msg?: string;
    data?: BasePageAnswerScoreRangesDTO;
  };
  export type AccountInfoPageQuery = {
    pageIndex: number;
    pageSize?: number;
    id?: string;
    type?: "ADMIN" | "INSTITUTION" | "DOCTOR" | "USER";
    status?: "ENABLE" | "DISABLE";
    sex?: "MAN" | "WOMAN" | "UNKNOWN";
    age?: number;
    keyword?: string;
  };
  export type BasePageAccountInfoDTO = {
    total?: number;
    list?: AccountInfoDTO[];
  };
  export type ResultBasePageAccountInfoDTO = {
    code?: number;
    msg?: string;
    data?: BasePageAccountInfoDTO;
  };
  export type UserCollectionPageQuery = {
    pageIndex: number;
    pageSize?: number;
    id?: string;
    userId?: string;
    resourceId?: string;
    type?: "DOCTOR" | "SURVEY" | "CLASS" | "LIVE";
    institutionId?: string;
  };
  export type BasePageUserCollectionDto = {
    total?: number;
    list?: UserCollectionDto[];
  };
  export type ResultBasePageUserCollectionDto = {
    code?: number;
    msg?: string;
    data?: BasePageUserCollectionDto;
  };
  export type UserCollectionDto = {
    id?: string;
    createTime?: string;
    userId?: string;
    resourceId?: string;
    type?: "DOCTOR" | "SURVEY" | "CLASS" | "LIVE";
    snapshot?: string;
    institutionId?: string;
    userName?: string;
    institutionName?: string;
  };
  export type RolePageQuery = {
    pageIndex: number;
    pageSize?: number;
    id?: string;
    status?: "ENABLE" | "DISABLE";
    keyword?: string;
  };
  export type BasePageRoleDTO = {
    total?: number;
    list?: RoleDTO[];
  };
  export type ResultBasePageRoleDTO = {
    code?: number;
    msg?: string;
    data?: BasePageRoleDTO;
  };
  export type LogInfoPageQuery = {
    pageIndex: number;
    pageSize?: number;
    id?: string;
    type?: "LOGIN" | "EXCEPTION" | "OPERATION";
  };
  export type BasePageLogInfoDTO = {
    total?: number;
    list?: LogInfoDTO[];
  };
  export type ResultBasePageLogInfoDTO = {
    code?: number;
    msg?: string;
    data?: BasePageLogInfoDTO;
  };
  export type ResultLogInfoDTO = {
    code?: number;
    msg?: string;
    data?: LogInfoDTO;
  };
  export type LevelConfigPageQuery = {
    pageIndex: number;
    pageSize?: number;
    id?: string;
    workingYears?: number;
    keyword?: string;
  };
  export type BasePageLevelConfigDTO = {
    total?: number;
    list?: LevelConfigDTO[];
  };
  export type ResultBasePageLevelConfigDTO = {
    code?: number;
    msg?: string;
    data?: BasePageLevelConfigDTO;
  };
  export type IMLinkDTO = {
    appId?: string;
    data?: string;
    key?: string;
    nonceStr?: string;
    sign?: string;
    timestamp?: string;
    appUserId?: string;
  };
  export type ResultIMLinkDTO = {
    code?: number;
    msg?: string;
    data?: IMLinkDTO;
  };
  export type FeedbackPageQuery = {
    pageIndex: number;
    pageSize?: number;
    id?: string;
    status?: "PENDING" | "ACCEPTED" | "CLOSED";
    type?: string;
    keyword?: string;
  };
  export type BasePageFeedbackDTO = {
    total?: number;
    list?: FeedbackDTO[];
  };
  export type ResultBasePageFeedbackDTO = {
    code?: number;
    msg?: string;
    data?: BasePageFeedbackDTO;
  };
  export type CoursePageQuery = {
    pageIndex: number;
    pageSize?: number;
    id?: string;
    title?: string;
    description?: string;
    price?: number;
    isActive?: boolean;
    isRec?: boolean;
    isTop?: boolean;
    type?: string;
    institutionId?: string;
    keyword?: string;
  };
  export type BasePageCourseDto = {
    total?: number;
    list?: CourseDto[];
  };
  export type ResultBasePageCourseDto = {
    code?: number;
    msg?: string;
    data?: BasePageCourseDto;
  };
  export type SysConfigPageQuery = {
    pageIndex: number;
    pageSize?: number;
    id?: string;
    type?: number;
    name?: string;
    keyword?: string;
  };
  export type BasePageSysConfigDTO = {
    total?: number;
    list?: SysConfigDTO[];
  };
  export type ResultBasePageSysConfigDTO = {
    code?: number;
    msg?: string;
    data?: BasePageSysConfigDTO;
  };
  export type ResultListSysConfigStoreCity = {
    code?: number;
    msg?: string;
    data?: SysConfigStoreCity[];
  };
  export type ResultSysConfigBasicInfo = {
    code?: number;
    msg?: string;
    data?: SysConfigBasicInfo;
  };
  export type BannerPageQuery = {
    pageIndex: number;
    pageSize?: number;
    id?: string;
    imageUrl?: string;
    linkUrl?: string;
    description?: string;
    order?: number;
    type?: "NORMAL" | "N_LIAN" | "W_LIAN";
  };
  export type BasePageBannerDTO = {
    total?: number;
    list?: BannerDTO[];
  };
  export type ResultBasePageBannerDTO = {
    code?: number;
    msg?: string;
    data?: BasePageBannerDTO;
  };
  export type AuditLogPageQuery = {
    pageIndex: number;
    pageSize?: number;
    id?: string;
    applicantId?: string;
    auditorId?: string;
    type: "INSTITUTION" | "DOCTOR";
    keyword?: string;
  };
  export type BasePageAuditLogDTO = {
    total?: number;
    list?: AuditLogDTO[];
  };
  export type ResultBasePageAuditLogDTO = {
    code?: number;
    msg?: string;
    data?: BasePageAuditLogDTO;
  };
  export type ResultUsernamePassword = {
    code?: number;
    msg?: string;
    data?: UsernamePassword;
  };
  export type ArticlePageQuery = {
    pageIndex: number;
    pageSize?: number;
    id?: string;
    keyword?: string;
    status?: "ENABLE" | "DISABLE";
    type?: string;
  };
  export type BasePageArticleDTO = {
    total?: number;
    list?: ArticleDTO[];
  };
  export type ResultBasePageArticleDTO = {
    code?: number;
    msg?: string;
    data?: BasePageArticleDTO;
  };
  export type AnnouncementPageQuery = {
    pageIndex: number;
    pageSize?: number;
    id?: string;
    keyword?: string;
    isActive?: boolean;
    source: "ADMIN" | "APP";
    type?: string;
  };
  export type BasePageAnnouncementDTO = {
    total?: number;
    list?: AnnouncementDTO[];
  };
  export type ResultBasePageAnnouncementDTO = {
    code?: number;
    msg?: string;
    data?: BasePageAnnouncementDTO;
  };
}
