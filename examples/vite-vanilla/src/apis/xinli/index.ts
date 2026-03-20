// 当前文件由 un-api-builder 自动生成-非必要请勿手动修改此文件
import * as apis from './apis/index.ts';
import { createProxyModule } from 'un-api-builder/browser';
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | ins | putApiV1UserInfoItem | /ins/api/v1/userInfo/item | PUT | 修改用户 |
 * | ins | postApiV1UserInfoItem | /ins/api/v1/userInfo/item | POST | 新增用户 |
 * | ins | deleteApiV1UserInfoItem | /ins/api/v1/userInfo/item | DELETE | 批量删除 |
 * | ins | putApiV1SystemMessageList | /ins/api/v1/systemMessage/list | PUT | 批量修改 |
 * | ins | postApiV1SystemMessageList | /ins/api/v1/systemMessage/list | POST | 批量新增 |
 * | ins | deleteApiV1SystemMessageList | /ins/api/v1/systemMessage/list | DELETE | 批量删除 |
 * | ins | putApiV1SystemMessageItem | /ins/api/v1/systemMessage/item | PUT | 修改 |
 * | ins | postApiV1SystemMessageItem | /ins/api/v1/systemMessage/item | POST | 新增 |
 * | ins | putApiV1SurveysParticipantList | /ins/api/v1/surveysParticipant/list | PUT | 批量修改 |
 * | ins | postApiV1SurveysParticipantList | /ins/api/v1/surveysParticipant/list | POST | 批量新增 |
 * | ins | deleteApiV1SurveysParticipantList | /ins/api/v1/surveysParticipant/list | DELETE | 批量删除 |
 * | ins | putApiV1SurveysParticipantItem | /ins/api/v1/surveysParticipant/item | PUT | 修改 |
 * | ins | postApiV1SurveysParticipantItem | /ins/api/v1/surveysParticipant/item | POST | 新增 |
 * | ins | putApiV1SurveysItem | /ins/api/v1/surveys/item | PUT | 修改 |
 * | ins | postApiV1SurveysItem | /ins/api/v1/surveys/item | POST | 新增 |
 * | ins | putApiV1SurveysCategoryItem | /ins/api/v1/surveys/category/item | PUT | 修改 |
 * | ins | postApiV1SurveysCategoryItem | /ins/api/v1/surveys/category/item | POST | 添加 |
 * | ins | deleteApiV1SurveysCategoryItem | /ins/api/v1/surveys/category/item | DELETE | 批量删除 |
 * | ins | putApiV1QuestionsUpdateStatusById | /ins/api/v1/questions/updateStatus/{id} | PUT | 修改状态 |
 * | ins | putApiV1QuestionsList | /ins/api/v1/questions/list | PUT | 批量修改（量表的题） |
 * | ins | postApiV1QuestionsList | /ins/api/v1/questions/list | POST | 批量新增 |
 * | ins | deleteApiV1QuestionsList | /ins/api/v1/questions/list | DELETE | 批量删除 |
 * | ins | putApiV1QuestionsItem | /ins/api/v1/questions/item | PUT | 修改（题库的题） |
 * | ins | postApiV1QuestionsItem | /ins/api/v1/questions/item | POST | 新增 |
 * | ins | putApiV1PreconditionList | /ins/api/v1/precondition/list | PUT | 批量修改 |
 * | ins | postApiV1PreconditionList | /ins/api/v1/precondition/list | POST | 批量新增 |
 * | ins | deleteApiV1PreconditionList | /ins/api/v1/precondition/list | DELETE | 批量删除 |
 * | ins | putApiV1PreconditionItem | /ins/api/v1/precondition/item | PUT | 修改 |
 * | ins | postApiV1PreconditionItem | /ins/api/v1/precondition/item | POST | 新增 |
 * | ins | putApiV1OptionsList | /ins/api/v1/options/list | PUT | 批量修改 |
 * | ins | postApiV1OptionsList | /ins/api/v1/options/list | POST | 批量新增 |
 * | ins | deleteApiV1OptionsList | /ins/api/v1/options/list | DELETE | 批量删除 |
 * | ins | putApiV1OptionsItem | /ins/api/v1/options/item | PUT | 修改 |
 * | ins | postApiV1OptionsItem | /ins/api/v1/options/item | POST | 新增 |
 * | ins | putApiV1InstitutionItem | /ins/api/v1/institution/item | PUT | 修改 |
 * | ins | putApiV1InformationQuestionsList | /ins/api/v1/informationQuestions/list | PUT | 批量修改 |
 * | ins | postApiV1InformationQuestionsList | /ins/api/v1/informationQuestions/list | POST | 批量新增 |
 * | ins | deleteApiV1InformationQuestionsList | /ins/api/v1/informationQuestions/list | DELETE | 批量删除 |
 * | ins | putApiV1InformationQuestionsItem | /ins/api/v1/informationQuestions/item | PUT | 修改 |
 * | ins | postApiV1InformationQuestionsItem | /ins/api/v1/informationQuestions/item | POST | 新增 |
 * | ins | putApiV1InformationCollectionItem | /ins/api/v1/informationCollection/item | PUT | 修改 |
 * | ins | postApiV1InformationCollectionItem | /ins/api/v1/informationCollection/item | POST | 新增 |
 * | ins | putApiV1DoctorItem | /ins/api/v1/doctor/item | PUT | 修改 |
 * | ins | postApiV1DoctorItem | /ins/api/v1/doctor/item | POST | 新增 |
 * | ins | putApiV1CourseTypeItem | /ins/api/v1/course/type/item | PUT | 修改课程 |
 * | ins | postApiV1CourseTypeItem | /ins/api/v1/course/type/item | POST | 添加课程分类 |
 * | ins | deleteApiV1CourseTypeItem | /ins/api/v1/course/type/item | DELETE | 批量删除课程 |
 * | ins | putApiV1CourseResourcesItem | /ins/api/v1/course/resources/item | PUT | 修改 |
 * | ins | postApiV1CourseResourcesItem | /ins/api/v1/course/resources/item | POST | 添加 |
 * | ins | deleteApiV1CourseResourcesItem | /ins/api/v1/course/resources/item | DELETE | 批量删除 |
 * | ins | putApiV1CategoryList | /ins/api/v1/category/list | PUT | 批量修改 |
 * | ins | postApiV1CategoryList | /ins/api/v1/category/list | POST | 批量新增 |
 * | ins | deleteApiV1CategoryList | /ins/api/v1/category/list | DELETE | 批量删除 |
 * | ins | putApiV1CategoryItem | /ins/api/v1/category/item | PUT | 修改 |
 * | ins | postApiV1CategoryItem | /ins/api/v1/category/item | POST | 新增 |
 * | ins | putApiV1AnswersList | /ins/api/v1/answers/list | PUT | 批量修改 |
 * | ins | postApiV1AnswersList | /ins/api/v1/answers/list | POST | 批量新增 |
 * | ins | deleteApiV1AnswersList | /ins/api/v1/answers/list | DELETE | 批量删除 |
 * | ins | putApiV1AnswersItem | /ins/api/v1/answers/item | PUT | 修改 |
 * | ins | postApiV1AnswersItem | /ins/api/v1/answers/item | POST | 新增 |
 * | ins | putApiV1AnswerScoreRangesList | /ins/api/v1/answerScoreRanges/list | PUT | 批量修改 |
 * | ins | postApiV1AnswerScoreRangesList | /ins/api/v1/answerScoreRanges/list | POST | 批量新增 |
 * | ins | deleteApiV1AnswerScoreRangesList | /ins/api/v1/answerScoreRanges/list | DELETE | 批量删除 |
 * | ins | putApiV1AnswerScoreRangesItem | /ins/api/v1/answerScoreRanges/item | PUT | 修改 |
 * | ins | postApiV1AnswerScoreRangesItem | /ins/api/v1/answerScoreRanges/item | POST | 新增 |
 * | ins | putApiV1AccountItem | /ins/api/v1/account/item | PUT | 修改账号信息 |
 * | ins | putApiV1AccountInfoStatusById | /ins/api/v1/account/info/status/{id} | PUT | 修改状态 |
 * | ins | putApiV1AccountInfoPassword | /ins/api/v1/account/info/password | PUT | 修改密码 |
 * | ins | putApiV1AccountInfoItem | /ins/api/v1/account/info/item | PUT | 修改账号信息 |
 * | ins | postApiV1AccountInfoItem | /ins/api/v1/account/info/item | POST | 新增账号信息 |
 * | ins | postApiV1UserInfoGetUserNameById | /ins/api/v1/userInfo/getUserNameById | POST | 根据用户id查询用户名 |
 * | ins | postApiV1SystemMessageListQuery | /ins/api/v1/systemMessage/list/query | POST | 批量查询 |
 * | ins | postApiV1SurveysParticipantListQuery | /ins/api/v1/surveysParticipant/list/query | POST | 批量查询 |
 * | ins | postApiV1QuestionsListQuery | /ins/api/v1/questions/list/query | POST | 批量查询 |
 * | ins | postApiV1PreconditionListQuery | /ins/api/v1/precondition/list/query | POST | 批量查询 |
 * | ins | postApiV1OptionsListQuery | /ins/api/v1/options/list/query | POST | 批量查询 |
 * | ins | postApiV1InformationQuestionsListQuery | /ins/api/v1/informationQuestions/list/query | POST | 批量查询 |
 * | ins | postApiV1InformationCollectionListQuery | /ins/api/v1/informationCollection/list/query | POST | 批量查询 |
 * | ins | postApiV1FileList | /ins/api/v1/file/list | POST | 批量上传文件（FormData） |
 * | ins | postApiV1FileListBase64 | /ins/api/v1/file/list/base64 | POST | 批量上传文件（Base64） |
 * | ins | postApiV1FileItem | /ins/api/v1/file/item | POST | 上传文件（FormData） |
 * | ins | postApiV1DoctorPutStatusByIdByStatus | /ins/api/v1/doctor/putStatus/{id}/{status} | POST | 修改状态 |
 * | ins | postApiV1DoctorEnterAudit | /ins/api/v1/doctor/enterAudit | POST | 医生入驻审核 |
 * | ins | postApiV1CategoryListQuery | /ins/api/v1/category/list/query | POST | 批量查询 |
 * | ins | postApiV1AnswersListQuery | /ins/api/v1/answers/list/query | POST | 批量查询 |
 * | ins | postApiV1AnswerScoreRangesListQuery | /ins/api/v1/answerScoreRanges/list/query | POST | 批量查询 |
 * | ins | postApiV1AccountLogin | /ins/api/v1/account/login | POST | 登录 |
 * | ins | postApiV1AccountInfoLogin | /ins/api/v1/account/info/login | POST | 登录 |
 * | ins | postApiV1AccountInfoGetUserNameById | /ins/api/v1/account/info/getUserNameById | POST | 根据账号id查询userName |
 * | ins | getApiV1UserInfoPage | /ins/api/v1/userInfo/page | GET | 分页查询 |
 * | ins | getApiV1UserInfoItemById | /ins/api/v1/userInfo/item/{id} | GET | 查询指定用户 |
 * | ins | deleteApiV1UserInfoItemById | /ins/api/v1/userInfo/item/{id} | DELETE | 删除 |
 * | ins | getApiV1UserInfoGetUserInfo | /ins/api/v1/userInfo/getUserInfo | GET | 小程序获取登录用户信息 |
 * | ins | getApiV1UserInfoGetAvaByIdById | /ins/api/v1/userInfo/getAvaById/{id} | GET | 查询指定用户头像 |
 * | ins | getApiV1SystemMessagePage | /ins/api/v1/systemMessage/page | GET | 多条件组合分页查询 |
 * | ins | getApiV1SystemMessageItemById | /ins/api/v1/systemMessage/item/{id} | GET | 查询 |
 * | ins | deleteApiV1SystemMessageItemById | /ins/api/v1/systemMessage/item/{id} | DELETE | 删除 |
 * | ins | getApiV1SurveysParticipantPage | /ins/api/v1/surveysParticipant/page | GET | 多条件组合分页查询 |
 * | ins | getApiV1SurveysParticipantItemById | /ins/api/v1/surveysParticipant/item/{id} | GET | 查询 |
 * | ins | deleteApiV1SurveysParticipantItemById | /ins/api/v1/surveysParticipant/item/{id} | DELETE | 删除 |
 * | ins | getApiV1SurveysPage | /ins/api/v1/surveys/page | GET | 多条件组合分页查询 |
 * | ins | getApiV1SurveysItemById | /ins/api/v1/surveys/item/{id} | GET | 查询 |
 * | ins | deleteApiV1SurveysItemById | /ins/api/v1/surveys/item/{id} | DELETE | 删除 |
 * | ins | getApiV1SurveysCategoryStatusByIdByStatus | /ins/api/v1/surveys/category/status/{id}/{status} | GET | 禁用/启用 |
 * | ins | getApiV1SurveysCategoryPage | /ins/api/v1/surveys/category/page | GET | 分页查询 |
 * | ins | getApiV1SurveysCategoryGetTopBranch | /ins/api/v1/surveys/category/getTopBranch | GET | 获取顶层节点数据 |
 * | ins | getApiV1SurveysCategoryGetChildBranch | /ins/api/v1/surveys/category/getChildBranch | GET | 获取子节点数据 |
 * | ins | getApiV1QuestionsPage | /ins/api/v1/questions/page | GET | 多条件组合分页查询 |
 * | ins | getApiV1QuestionsItemById | /ins/api/v1/questions/item/{id} | GET | 查询 |
 * | ins | deleteApiV1QuestionsItemById | /ins/api/v1/questions/item/{id} | DELETE | 删除 |
 * | ins | getApiV1PreconditionPage | /ins/api/v1/precondition/page | GET | 多条件组合分页查询 |
 * | ins | getApiV1PreconditionItemById | /ins/api/v1/precondition/item/{id} | GET | 查询 |
 * | ins | deleteApiV1PreconditionItemById | /ins/api/v1/precondition/item/{id} | DELETE | 删除 |
 * | ins | getApiV1OptionsPage | /ins/api/v1/options/page | GET | 多条件组合分页查询 |
 * | ins | getApiV1OptionsItemById | /ins/api/v1/options/item/{id} | GET | 查询 |
 * | ins | deleteApiV1OptionsItemById | /ins/api/v1/options/item/{id} | DELETE | 删除 |
 * | ins | getApiV1MenusPage | /ins/api/v1/menus/page | GET | 分页查询 |
 * | ins | getApiV1MenusGetByRoleId | /ins/api/v1/menus/getByRoleId | GET | 获取角色权限 |
 * | ins | getApiV1MenusGetByAccountId | /ins/api/v1/menus/getByAccountId | GET | 获取登录账号菜单功能权限 |
 * | ins | getApiV1InstitutionPage | /ins/api/v1/institution/page | GET | 多条件组合分页查询 |
 * | ins | getApiV1InformationQuestionsQuestionListBySurveyId | /ins/api/v1/informationQuestions/questionList/{surveyId} | GET | 根据量表id查询问题和选项 |
 * | ins | getApiV1InformationQuestionsPage | /ins/api/v1/informationQuestions/page | GET | 多条件组合分页查询 |
 * | ins | getApiV1InformationQuestionsItemById | /ins/api/v1/informationQuestions/item/{id} | GET | 查询 |
 * | ins | getApiV1InformationCollectionPage | /ins/api/v1/informationCollection/page | GET | 多条件组合分页查询 |
 * | ins | getApiV1FileDownload | /ins/api/v1/file/download | GET | 下载文件 |
 * | ins | getApiV1DoctorPage | /ins/api/v1/doctor/page | GET | 多条件组合分页查询 |
 * | ins | getApiV1DictPage | /ins/api/v1/dict/page | GET | 分页查询 |
 * | ins | getApiV1DictDataPage | /ins/api/v1/dict/data/page | GET | 分页查询 |
 * | ins | getApiV1CourseTypePage | /ins/api/v1/course/type/page | GET | 分页查询 |
 * | ins | getApiV1CourseResourcesPage | /ins/api/v1/course/resources/page | GET | 分页查询 |
 * | ins | getApiV1ConfigAllEnums | /ins/api/v1/config/allEnums | GET | 获取所有枚举信息 |
 * | ins | getApiV1CategoryPage | /ins/api/v1/category/page | GET | 多条件组合分页查询 |
 * | ins | getApiV1CategoryItemById | /ins/api/v1/category/item/{id} | GET | 查询 |
 * | ins | deleteApiV1CategoryItemById | /ins/api/v1/category/item/{id} | DELETE | 删除 |
 * | ins | getApiV1AnswersPage | /ins/api/v1/answers/page | GET | 多条件组合分页查询 |
 * | ins | getApiV1AnswersItemById | /ins/api/v1/answers/item/{id} | GET | 查询 |
 * | ins | deleteApiV1AnswersItemById | /ins/api/v1/answers/item/{id} | DELETE | 删除 |
 * | ins | getApiV1AnswerScoreRangesPage | /ins/api/v1/answerScoreRanges/page | GET | 多条件组合分页查询 |
 * | ins | getApiV1AnswerScoreRangesItemById | /ins/api/v1/answerScoreRanges/item/{id} | GET | 查询 |
 * | ins | deleteApiV1AnswerScoreRangesItemById | /ins/api/v1/answerScoreRanges/item/{id} | DELETE | 删除 |
 * | ins | getApiV1AccountInfoPage | /ins/api/v1/account/info/page | GET | 分页查询 |
 * | ins | getApiV1AccountInfoItemById | /ins/api/v1/account/info/item/{id} | GET | 根据id获取账号信息 |
 * | ins | deleteApiV1AccountInfoItemById | /ins/api/v1/account/info/item/{id} | DELETE | 删除账号 |
 * | ins | getApiV1AccountInfoGetAccountInfo | /ins/api/v1/account/info/getAccountInfo | GET | 获取登录账号信息 |
 * | ins | getApiV1AccountGetAccountInfo | /ins/api/v1/account/getAccountInfo | GET | 获取登录账号信息 |
 * | ins | deleteApiV1SurveysList | /ins/api/v1/surveys/list | DELETE | 批量删除 |
 * | ins | deleteApiV1SurveysCategoryItemById | /ins/api/v1/surveys/category/item/{id} | DELETE | 删除 |
 * | ins | deleteApiV1InformationCollectionList | /ins/api/v1/informationCollection/list | DELETE | 批量删除 |
 * | ins | deleteApiV1InformationCollectionItemById | /ins/api/v1/informationCollection/item/{id} | DELETE | 删除 |
 * | ins | deleteApiV1DoctorList | /ins/api/v1/doctor/list | DELETE | 批量删除 |
 * | ins | deleteApiV1DoctorItemById | /ins/api/v1/doctor/item/{id} | DELETE | 删除 |
 * | ins | deleteApiV1CourseTypeItemById | /ins/api/v1/course/type/item/{id} | DELETE | 删除课程 |
 * | ins | deleteApiV1CourseResourcesItemById | /ins/api/v1/course/resources/item/{id} | DELETE | 删除 |
 * | ins | deleteApiV1AccountInfoList | /ins/api/v1/account/info/list | DELETE | 删除账号信息 |
 */
export const apiIns = createProxyModule(apis.ins,({url,...ops})=>globalThis.fetch(url, ops));
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | userInfo | putItem | /userInfo/item | PUT | 修改用户 |
 * | userInfo | postItem | /userInfo/item | POST | 新增用户 |
 * | userInfo | deleteItem | /userInfo/item | DELETE | 批量删除 |
 * | userInfo | postGetUserNameById | /userInfo/getUserNameById | POST | 根据用户id查询用户名 |
 * | userInfo | getPage | /userInfo/page | GET | 分页查询 |
 * | userInfo | getItemById | /userInfo/item/{id} | GET | 查询指定用户 |
 * | userInfo | deleteItemById | /userInfo/item/{id} | DELETE | 删除 |
 * | userInfo | getGetUserInfo | /userInfo/getUserInfo | GET | 小程序获取登录用户信息 |
 * | userInfo | getGetAvaByIdById | /userInfo/getAvaById/{id} | GET | 查询指定用户头像 |
 */
export const apiUserInfo = createProxyModule(apis.userInfo,({url,...ops})=>globalThis.fetch(url, ops));
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | systemMessage | putList | /systemMessage/list | PUT | 批量修改 |
 * | systemMessage | postList | /systemMessage/list | POST | 批量新增 |
 * | systemMessage | deleteList | /systemMessage/list | DELETE | 批量删除 |
 * | systemMessage | putItem | /systemMessage/item | PUT | 修改 |
 * | systemMessage | postItem | /systemMessage/item | POST | 新增 |
 * | systemMessage | postListQuery | /systemMessage/list/query | POST | 批量查询 |
 * | systemMessage | getPage | /systemMessage/page | GET | 多条件组合分页查询 |
 * | systemMessage | getItemById | /systemMessage/item/{id} | GET | 查询 |
 * | systemMessage | deleteItemById | /systemMessage/item/{id} | DELETE | 删除 |
 */
export const apiSystemMessage = createProxyModule(apis.systemMessage,({url,...ops})=>globalThis.fetch(url, ops));
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | surveysParticipant | putList | /surveysParticipant/list | PUT | 批量修改 |
 * | surveysParticipant | postList | /surveysParticipant/list | POST | 批量新增 |
 * | surveysParticipant | deleteList | /surveysParticipant/list | DELETE | 批量删除 |
 * | surveysParticipant | putItem | /surveysParticipant/item | PUT | 修改 |
 * | surveysParticipant | postItem | /surveysParticipant/item | POST | 新增 |
 * | surveysParticipant | postListQuery | /surveysParticipant/list/query | POST | 批量查询 |
 * | surveysParticipant | getPage | /surveysParticipant/page | GET | 多条件组合分页查询 |
 * | surveysParticipant | getItemById | /surveysParticipant/item/{id} | GET | 查询 |
 * | surveysParticipant | deleteItemById | /surveysParticipant/item/{id} | DELETE | 删除 |
 */
export const apiSurveysParticipant = createProxyModule(apis.surveysParticipant,({url,...ops})=>globalThis.fetch(url, ops));
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | surveys | putList | /surveys/list | PUT | 批量修改 |
 * | surveys | postList | /surveys/list | POST | 批量新增 |
 * | surveys | deleteList | /surveys/list | DELETE | 批量删除 |
 * | surveys | putItem | /surveys/item | PUT | 修改 |
 * | surveys | postItem | /surveys/item | POST | 新增 |
 * | surveys | putCategoryItem | /surveys/category/item | PUT | 修改 |
 * | surveys | postCategoryItem | /surveys/category/item | POST | 添加 |
 * | surveys | deleteCategoryItem | /surveys/category/item | DELETE | 批量删除 |
 * | surveys | postListQuery | /surveys/list/query | POST | 批量查询 |
 * | surveys | getPage | /surveys/page | GET | 多条件组合分页查询 |
 * | surveys | getItemById | /surveys/item/{id} | GET | 查询 |
 * | surveys | deleteItemById | /surveys/item/{id} | DELETE | 删除 |
 * | surveys | getCategoryStatusByIdByStatus | /surveys/category/status/{id}/{status} | GET | 禁用/启用 |
 * | surveys | getCategoryPage | /surveys/category/page | GET | 分页查询 |
 * | surveys | getCategoryGetTopBranch | /surveys/category/getTopBranch | GET | 获取顶层节点数据 |
 * | surveys | getCategoryGetChildBranch | /surveys/category/getChildBranch | GET | 获取子节点数据 |
 * | surveys | deleteCategoryItemById | /surveys/category/item/{id} | DELETE | 删除 |
 */
export const apiSurveys = createProxyModule(apis.surveys,({url,...ops})=>globalThis.fetch(url, ops));
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | role | putStatusById | /role/status/{id} | PUT | 修改状态 |
 * | role | putItem | /role/item | PUT | 修改角色 |
 * | role | postItem | /role/item | POST | 新增角色 |
 * | role | postListQuery | /role/list/query | POST | 批量查询 |
 * | role | getPage | /role/page | GET | 分页查询 |
 * | role | deleteList | /role/list | DELETE | 删除角色 |
 * | role | deleteItemById | /role/item/{id} | DELETE | 删除角色 |
 */
export const apiRole = createProxyModule(apis.role,({url,...ops})=>globalThis.fetch(url, ops));
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | questions | putUpdateStatusById | /questions/updateStatus/{id} | PUT | 修改状态 |
 * | questions | putList | /questions/list | PUT | 批量修改（量表的题） |
 * | questions | postList | /questions/list | POST | 批量新增 |
 * | questions | deleteList | /questions/list | DELETE | 批量删除 |
 * | questions | putItem | /questions/item | PUT | 修改（题库的题） |
 * | questions | postItem | /questions/item | POST | 新增 |
 * | questions | postListQuery | /questions/list/query | POST | 批量查询 |
 * | questions | getPage | /questions/page | GET | 多条件组合分页查询 |
 * | questions | getItemById | /questions/item/{id} | GET | 查询 |
 * | questions | deleteItemById | /questions/item/{id} | DELETE | 删除 |
 */
export const apiQuestions = createProxyModule(apis.questions,({url,...ops})=>globalThis.fetch(url, ops));
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | precondition | putList | /precondition/list | PUT | 批量修改 |
 * | precondition | postList | /precondition/list | POST | 批量新增 |
 * | precondition | deleteList | /precondition/list | DELETE | 批量删除 |
 * | precondition | putItem | /precondition/item | PUT | 修改 |
 * | precondition | postItem | /precondition/item | POST | 新增 |
 * | precondition | postListQuery | /precondition/list/query | POST | 批量查询 |
 * | precondition | getPage | /precondition/page | GET | 多条件组合分页查询 |
 * | precondition | getItemById | /precondition/item/{id} | GET | 查询 |
 * | precondition | deleteItemById | /precondition/item/{id} | DELETE | 删除 |
 */
export const apiPrecondition = createProxyModule(apis.precondition,({url,...ops})=>globalThis.fetch(url, ops));
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | options | putList | /options/list | PUT | 批量修改 |
 * | options | postList | /options/list | POST | 批量新增 |
 * | options | deleteList | /options/list | DELETE | 批量删除 |
 * | options | putItem | /options/item | PUT | 修改 |
 * | options | postItem | /options/item | POST | 新增 |
 * | options | postListQuery | /options/list/query | POST | 批量查询 |
 * | options | getPage | /options/page | GET | 多条件组合分页查询 |
 * | options | getItemById | /options/item/{id} | GET | 查询 |
 * | options | deleteItemById | /options/item/{id} | DELETE | 删除 |
 */
export const apiOptions = createProxyModule(apis.options,({url,...ops})=>globalThis.fetch(url, ops));
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | menus | putItem | /menus/item | PUT | 修改菜单 |
 * | menus | postItem | /menus/item | POST | 新增菜单 |
 * | menus | postListQuery | /menus/list/query | POST | 批量查询 |
 * | menus | getPage | /menus/page | GET | 分页查询 |
 * | menus | getGetByRoleId | /menus/getByRoleId | GET | 获取角色权限 |
 * | menus | getGetByAccountId | /menus/getByAccountId | GET | 获取登录账号菜单功能权限 |
 * | menus | deleteList | /menus/list | DELETE | 删除菜单 |
 * | menus | deleteItemById | /menus/item/{id} | DELETE | 删除 |
 */
export const apiMenus = createProxyModule(apis.menus,({url,...ops})=>globalThis.fetch(url, ops));
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | levelConfig | putList | /levelConfig/list | PUT | 批量修改 |
 * | levelConfig | postList | /levelConfig/list | POST | 批量新增 |
 * | levelConfig | deleteList | /levelConfig/list | DELETE | 批量删除 |
 * | levelConfig | putItem | /levelConfig/item | PUT | 修改 |
 * | levelConfig | postItem | /levelConfig/item | POST | 新增 |
 * | levelConfig | postListQuery | /levelConfig/list/query | POST | 批量查询 |
 * | levelConfig | getPage | /levelConfig/page | GET | 多条件组合分页查询 |
 * | levelConfig | getItemById | /levelConfig/item/{id} | GET | 查询 |
 * | levelConfig | deleteItemById | /levelConfig/item/{id} | DELETE | 删除 |
 */
export const apiLevelConfig = createProxyModule(apis.levelConfig,({url,...ops})=>globalThis.fetch(url, ops));
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | institution | putItem | /institution/item | PUT | 修改 |
 * | institution | postItem | /institution/item | POST | 新增 |
 * | institution | postEnterAudit | /institution/enterAudit | POST | 机构入驻审核 |
 * | institution | getPage | /institution/page | GET | 多条件组合分页查询 |
 * | institution | getGetPasswordById | /institution/getPassword/{id} | GET | 获取机构密码 |
 * | institution | deleteList | /institution/list | DELETE | 批量删除 |
 * | institution | deleteItemById | /institution/item/{id} | DELETE | 删除 |
 */
export const apiInstitution = createProxyModule(apis.institution,({url,...ops})=>globalThis.fetch(url, ops));
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | informationQuestions | putList | /informationQuestions/list | PUT | 批量修改 |
 * | informationQuestions | postList | /informationQuestions/list | POST | 批量新增 |
 * | informationQuestions | deleteList | /informationQuestions/list | DELETE | 批量删除 |
 * | informationQuestions | putItem | /informationQuestions/item | PUT | 修改 |
 * | informationQuestions | postItem | /informationQuestions/item | POST | 新增 |
 * | informationQuestions | postListQuery | /informationQuestions/list/query | POST | 批量查询 |
 * | informationQuestions | getQuestionListBySurveyId | /informationQuestions/questionList/{surveyId} | GET | 根据量表id查询问题和选项 |
 * | informationQuestions | getPage | /informationQuestions/page | GET | 多条件组合分页查询 |
 * | informationQuestions | getItemById | /informationQuestions/item/{id} | GET | 查询 |
 */
export const apiInformationQuestions = createProxyModule(apis.informationQuestions,({url,...ops})=>globalThis.fetch(url, ops));
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | informationCollection | putList | /informationCollection/list | PUT | 批量修改 |
 * | informationCollection | postList | /informationCollection/list | POST | 批量新增 |
 * | informationCollection | deleteList | /informationCollection/list | DELETE | 批量删除 |
 * | informationCollection | putItem | /informationCollection/item | PUT | 修改 |
 * | informationCollection | postItem | /informationCollection/item | POST | 新增 |
 * | informationCollection | postListQuery | /informationCollection/list/query | POST | 批量查询 |
 * | informationCollection | getPage | /informationCollection/page | GET | 多条件组合分页查询 |
 * | informationCollection | getItemById | /informationCollection/item/{id} | GET | 查询 |
 * | informationCollection | deleteItemById | /informationCollection/item/{id} | DELETE | 删除 |
 */
export const apiInformationCollection = createProxyModule(apis.informationCollection,({url,...ops})=>globalThis.fetch(url, ops));
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | feedback | putList | /feedback/list | PUT | 批量修改 |
 * | feedback | postList | /feedback/list | POST | 批量新增 |
 * | feedback | deleteList | /feedback/list | DELETE | 批量删除 |
 * | feedback | putItem | /feedback/item | PUT | 修改 |
 * | feedback | postItem | /feedback/item | POST | 新增 |
 * | feedback | postListQuery | /feedback/list/query | POST | 批量查询 |
 * | feedback | getPage | /feedback/page | GET | 多条件组合分页查询 |
 * | feedback | getItemById | /feedback/item/{id} | GET | 查询 |
 * | feedback | deleteItemById | /feedback/item/{id} | DELETE | 删除 |
 */
export const apiFeedback = createProxyModule(apis.feedback,({url,...ops})=>globalThis.fetch(url, ops));
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | doctor | putItem | /doctor/item | PUT | 修改 |
 * | doctor | postItem | /doctor/item | POST | 新增 |
 * | doctor | postPutStatusByIdByStatus | /doctor/putStatus/{id}/{status} | POST | 修改状态 |
 * | doctor | postEnterAudit | /doctor/enterAudit | POST | 医生入驻审核 |
 * | doctor | getPage | /doctor/page | GET | 多条件组合分页查询 |
 * | doctor | deleteList | /doctor/list | DELETE | 批量删除 |
 * | doctor | deleteItemById | /doctor/item/{id} | DELETE | 删除 |
 */
export const apiDoctor = createProxyModule(apis.doctor,({url,...ops})=>globalThis.fetch(url, ops));
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | dict | putStatusById | /dict/status/{id} | PUT | 修改状态 |
 * | dict | putItem | /dict/item | PUT | 修改字典类型 |
 * | dict | postItem | /dict/item | POST | 新增字典类型 |
 * | dict | putDataStatusById | /dict/data/status/{id} | PUT | 修改状态 |
 * | dict | putDataItem | /dict/data/item | PUT | 修改字典数据 |
 * | dict | postDataItem | /dict/data/item | POST | 新增字典数据 |
 * | dict | getPage | /dict/page | GET | 分页查询 |
 * | dict | getDataPage | /dict/data/page | GET | 分页查询 |
 * | dict | deleteList | /dict/list | DELETE | 删除字典类型 |
 * | dict | deleteItemById | /dict/item/{id} | DELETE | 删除 |
 * | dict | deleteDataList | /dict/data/list | DELETE | 删除字典数据 |
 * | dict | deleteDataItemById | /dict/data/item/{id} | DELETE | 删除字典数据 |
 */
export const apiDict = createProxyModule(apis.dict,({url,...ops})=>globalThis.fetch(url, ops));
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | course | putTypeItem | /course/type/item | PUT | 修改课程 |
 * | course | postTypeItem | /course/type/item | POST | 添加课程分类 |
 * | course | deleteTypeItem | /course/type/item | DELETE | 批量删除课程 |
 * | course | putResourcesItem | /course/resources/item | PUT | 修改 |
 * | course | postResourcesItem | /course/resources/item | POST | 添加 |
 * | course | deleteResourcesItem | /course/resources/item | DELETE | 批量删除 |
 * | course | putItem | /course/item | PUT | 修改课程 |
 * | course | postItem | /course/item | POST | 添加课程 |
 * | course | deleteItem | /course/item | DELETE | 批量删除课程 |
 * | course | getTypePage | /course/type/page | GET | 分页查询 |
 * | course | getResourcesPage | /course/resources/page | GET | 分页查询 |
 * | course | getPage | /course/page | GET | 分页查询 |
 * | course | deleteTypeItemById | /course/type/item/{id} | DELETE | 删除课程 |
 * | course | deleteResourcesItemById | /course/resources/item/{id} | DELETE | 删除 |
 * | course | deleteItemById | /course/item/{id} | DELETE | 删除课程 |
 */
export const apiCourse = createProxyModule(apis.course,({url,...ops})=>globalThis.fetch(url, ops));
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | config | putList | /config/list | PUT | 批量修改系统配置表 |
 * | config | postList | /config/list | POST | 批量新增系统配置表 |
 * | config | deleteList | /config/list | DELETE | 删除系统配置 |
 * | config | putItem | /config/item | PUT | 修改系统配置 |
 * | config | postItem | /config/item | POST | 新增系统配置 |
 * | config | postSaveStoreCity | /config/saveStoreCity | POST | 商家配置设置-城市 |
 * | config | postSaveBasicInfo | /config/saveBasicInfo | POST | 基础信息设置 |
 * | config | postListQuery | /config/list/query | POST | 批量查询系统配置表 |
 * | config | getPage | /config/page | GET | 系统配置分页查询 |
 * | config | getGetStoreCity | /config/getStoreCity | GET | 商家配置查询-城市 |
 * | config | getGetIsMaintenance | /config/getIsMaintenance | GET | 获取是否维护 |
 * | config | getGetBasicInfo | /config/getBasicInfo | GET | 基础信息查询 |
 * | config | getAllEnums | /config/allEnums | GET | 获取所有枚举信息 |
 */
export const apiConfig = createProxyModule(apis.config,({url,...ops})=>globalThis.fetch(url, ops));
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | category | putList | /category/list | PUT | 批量修改 |
 * | category | postList | /category/list | POST | 批量新增 |
 * | category | deleteList | /category/list | DELETE | 批量删除 |
 * | category | putItem | /category/item | PUT | 修改 |
 * | category | postItem | /category/item | POST | 新增 |
 * | category | postListQuery | /category/list/query | POST | 批量查询 |
 * | category | getPage | /category/page | GET | 多条件组合分页查询 |
 * | category | getItemById | /category/item/{id} | GET | 查询 |
 * | category | deleteItemById | /category/item/{id} | DELETE | 删除 |
 */
export const apiCategory = createProxyModule(apis.category,({url,...ops})=>globalThis.fetch(url, ops));
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | banner | putList | /banner/list | PUT | 批量修改 |
 * | banner | postList | /banner/list | POST | 批量新增 |
 * | banner | deleteList | /banner/list | DELETE | 批量删除 |
 * | banner | putItem | /banner/item | PUT | 修改 |
 * | banner | postItem | /banner/item | POST | 新增 |
 * | banner | postListQuery | /banner/list/query | POST | 批量查询 |
 * | banner | getPage | /banner/page | GET | 多条件组合分页查询 |
 * | banner | getItemById | /banner/item/{id} | GET | 查询 |
 * | banner | deleteItemById | /banner/item/{id} | DELETE | 删除 |
 */
export const apiBanner = createProxyModule(apis.banner,({url,...ops})=>globalThis.fetch(url, ops));
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | auditLog | putList | /auditLog/list | PUT | 批量修改审核 |
 * | auditLog | postList | /auditLog/list | POST | 批量新增审核 |
 * | auditLog | deleteList | /auditLog/list | DELETE | 批量删除审核 |
 * | auditLog | putItem | /auditLog/item | PUT | 修改审核 |
 * | auditLog | postItem | /auditLog/item | POST | 新增审核 |
 * | auditLog | postListQuery | /auditLog/list/query | POST | 批量查询审核 |
 * | auditLog | getPage | /auditLog/page | GET | 多条件组合分页查询 |
 * | auditLog | getItemById | /auditLog/item/{id} | GET | 查询审核 |
 * | auditLog | deleteItemById | /auditLog/item/{id} | DELETE | 删除审核 |
 * | auditLog | getGetPassword | /auditLog/getPassword | GET | 查看账号密码 |
 */
export const apiAuditLog = createProxyModule(apis.auditLog,({url,...ops})=>globalThis.fetch(url, ops));
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | article | putUpdateStatusById | /article/updateStatus/{id} | PUT | 修改状态 |
 * | article | putList | /article/list | PUT | 批量修改 |
 * | article | postList | /article/list | POST | 批量新增 |
 * | article | deleteList | /article/list | DELETE | 批量删除 |
 * | article | putItem | /article/item | PUT | 修改 |
 * | article | postItem | /article/item | POST | 新增 |
 * | article | postListQuery | /article/list/query | POST | 批量查询 |
 * | article | getPage | /article/page | GET | 多条件组合分页查询 |
 * | article | getItemById | /article/item/{id} | GET | 查询 |
 * | article | deleteItemById | /article/item/{id} | DELETE | 删除 |
 */
export const apiArticle = createProxyModule(apis.article,({url,...ops})=>globalThis.fetch(url, ops));
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | answers | putList | /answers/list | PUT | 批量修改 |
 * | answers | postList | /answers/list | POST | 批量新增 |
 * | answers | deleteList | /answers/list | DELETE | 批量删除 |
 * | answers | putItem | /answers/item | PUT | 修改 |
 * | answers | postItem | /answers/item | POST | 新增 |
 * | answers | postListQuery | /answers/list/query | POST | 批量查询 |
 * | answers | getPage | /answers/page | GET | 多条件组合分页查询 |
 * | answers | getItemById | /answers/item/{id} | GET | 查询 |
 * | answers | deleteItemById | /answers/item/{id} | DELETE | 删除 |
 */
export const apiAnswers = createProxyModule(apis.answers,({url,...ops})=>globalThis.fetch(url, ops));
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | answerScoreRanges | putList | /answerScoreRanges/list | PUT | 批量修改 |
 * | answerScoreRanges | postList | /answerScoreRanges/list | POST | 批量新增 |
 * | answerScoreRanges | deleteList | /answerScoreRanges/list | DELETE | 批量删除 |
 * | answerScoreRanges | putItem | /answerScoreRanges/item | PUT | 修改 |
 * | answerScoreRanges | postItem | /answerScoreRanges/item | POST | 新增 |
 * | answerScoreRanges | postListQuery | /answerScoreRanges/list/query | POST | 批量查询 |
 * | answerScoreRanges | getPage | /answerScoreRanges/page | GET | 多条件组合分页查询 |
 * | answerScoreRanges | getItemById | /answerScoreRanges/item/{id} | GET | 查询 |
 * | answerScoreRanges | deleteItemById | /answerScoreRanges/item/{id} | DELETE | 删除 |
 */
export const apiAnswerScoreRanges = createProxyModule(apis.answerScoreRanges,({url,...ops})=>globalThis.fetch(url, ops));
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | announcement | putUpdateStatusById | /announcement/updateStatus/{id} | PUT | 修改状态 |
 * | announcement | putList | /announcement/list | PUT | 批量修改 |
 * | announcement | postList | /announcement/list | POST | 批量新增 |
 * | announcement | deleteList | /announcement/list | DELETE | 批量删除 |
 * | announcement | putItem | /announcement/item | PUT | 修改 |
 * | announcement | postItem | /announcement/item | POST | 新增 |
 * | announcement | postListQuery | /announcement/list/query | POST | 批量查询 |
 * | announcement | getPage | /announcement/page | GET | 多条件组合分页查询 |
 * | announcement | getItemById | /announcement/item/{id} | GET | 查询 |
 * | announcement | deleteItemById | /announcement/item/{id} | DELETE | 删除 |
 */
export const apiAnnouncement = createProxyModule(apis.announcement,({url,...ops})=>globalThis.fetch(url, ops));
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | account | putStatusById | /account/status/{id} | PUT | 修改状态 |
 * | account | putPassword | /account/password | PUT | 修改密码 |
 * | account | putItem | /account/item | PUT | 修改账号信息 |
 * | account | postItem | /account/item | POST | 新增账号信息 |
 * | account | postLogin | /account/login | POST | 登录 |
 * | account | postGetUserNameById | /account/getUserNameById | POST | 根据账号id查询userName |
 * | account | getPage | /account/page | GET | 分页查询 |
 * | account | getItemById | /account/item/{id} | GET | 根据id获取账号信息 |
 * | account | deleteItemById | /account/item/{id} | DELETE | 删除账号 |
 * | account | getGetAccountInfo | /account/getAccountInfo | GET | 获取登录账号信息 |
 * | account | deleteList | /account/list | DELETE | 删除账号信息 |
 */
export const apiAccount = createProxyModule(apis.account,({url,...ops})=>globalThis.fetch(url, ops));
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | logInfo | postListQuery | /logInfo/list/query | POST | 批量查询日志 |
 * | logInfo | getPage | /logInfo/page | GET | 多条件组合分页查询 |
 * | logInfo | getItemById | /logInfo/item/{id} | GET | 查询日志 |
 */
export const apiLogInfo = createProxyModule(apis.logInfo,({url,...ops})=>globalThis.fetch(url, ops));
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | im | postLogin | /im/login | POST | 医生登录 |
 * | im | getLink | /im/link | GET | im连接 |
 * | im | getInfo | /im/info | GET | 当前登录信息 |
 */
export const apiIm = createProxyModule(apis.im,({url,...ops})=>globalThis.fetch(url, ops));
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | file | postList | /file/list | POST | 批量上传文件（FormData） |
 * | file | postListBase64 | /file/list/base64 | POST | 批量上传文件（Base64） |
 * | file | postItem | /file/item | POST | 上传文件（FormData） |
 * | file | postChunk | /file/chunk | POST | 分片上传 |
 * | file | getDownload | /file/download | GET | 下载文件 |
 */
export const apiFile = createProxyModule(apis.file,({url,...ops})=>globalThis.fetch(url, ops));
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | user | getCollectionPage | /user/collection/page | GET | 分页查询 |
 */
export const apiUser = createProxyModule(apis.user,({url,...ops})=>globalThis.fetch(url, ops));
/**
 * | 所属模块 | 接口名 | URL地址 | 请求类型 | 接口描述 |
 * | --- | --- | --- | --- | --- |
 * | auth | getGetKeyByAppId | /auth/getKey/{appId} | GET | 查询密钥 |
 */
export const apiAuth = createProxyModule(apis.auth,({url,...ops})=>globalThis.fetch(url, ops));