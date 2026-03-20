import { XinliModels } from "./models";
export namespace InformationQuestionsModels {
  /**
   * @url /informationQuestions/list
   * @summary 批量修改
   * @description
   */
  export type InformationQuestionsPutListQuery = Record<string, any>;
  export type InformationQuestionsPutListParams = Record<string, any>;
  export type InformationQuestionsPutListBody = XinliModels.InformationQuestionsDTO[];
  export type InformationQuestionsPutListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InformationQuestionsPutListGeneric = {
    query: InformationQuestionsPutListQuery;
    params: InformationQuestionsPutListParams;
    data: InformationQuestionsPutListBody;
    result: InformationQuestionsPutListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /informationQuestions/list
   * @summary 批量新增
   * @description
   */
  export type InformationQuestionsPostListQuery = Record<string, any>;
  export type InformationQuestionsPostListParams = Record<string, any>;
  export type InformationQuestionsPostListBody = XinliModels.InformationQuestionsDTO[];
  export type InformationQuestionsPostListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.InformationQuestionsDTO[];
  };
  export type InformationQuestionsPostListGeneric = {
    query: InformationQuestionsPostListQuery;
    params: InformationQuestionsPostListParams;
    data: InformationQuestionsPostListBody;
    result: InformationQuestionsPostListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /informationQuestions/list
   * @summary 批量删除
   * @description
   */
  export type InformationQuestionsDeleteListQuery = Record<string, any>;
  export type InformationQuestionsDeleteListParams = Record<string, any>;
  export type InformationQuestionsDeleteListBody = string[];
  export type InformationQuestionsDeleteListResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InformationQuestionsDeleteListGeneric = {
    query: InformationQuestionsDeleteListQuery;
    params: InformationQuestionsDeleteListParams;
    data: InformationQuestionsDeleteListBody;
    result: InformationQuestionsDeleteListResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /informationQuestions/item
   * @summary 修改
   * @description
   */
  export type InformationQuestionsPutItemQuery = Record<string, any>;
  export type InformationQuestionsPutItemParams = Record<string, any>;
  export type InformationQuestionsPutItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 量表ID */
    surveysId?: string;

    /** number (可选) - 排序 | 格式: int32 */
    order?: number;

    /** "{"desc":"单选","name":"SINGLE_CHOICE"}" | "{"desc":"多选","name":"MULTIPLE_CHOICE"}" (可选) - 问题类型，枚举：QuestionsType | 可选值: "{\"desc\":\"单选\",\"name\":\"SINGLE_CHOICE\"}", "{\"desc\":\"多选\",\"name\":\"MULTIPLE_CHOICE\"}" */
    questionType?: "SINGLE_CHOICE" | "MULTIPLE_CHOICE";

    /** string (可选) - 问题文本 */
    questionText?: string;

    /** boolean (可选) - 是否必填 */
    required?: boolean;

    /** string (可选) - code */
    code?: string;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态，枚举：Status | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";
  };
  export type InformationQuestionsPutItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** boolean (可选) */
    data?: boolean;
  };
  export type InformationQuestionsPutItemGeneric = {
    query: InformationQuestionsPutItemQuery;
    params: InformationQuestionsPutItemParams;
    data: InformationQuestionsPutItemBody;
    result: InformationQuestionsPutItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /informationQuestions/item
   * @summary 新增
   * @description
   */
  export type InformationQuestionsPostItemQuery = Record<string, any>;
  export type InformationQuestionsPostItemParams = Record<string, any>;
  export type InformationQuestionsPostItemBody = {
    /** string (可选) */
    id?: string;

    /** string (可选) - 格式: date-time */
    createTime?: string;

    /** string (可选) - 量表ID */
    surveysId?: string;

    /** number (可选) - 排序 | 格式: int32 */
    order?: number;

    /** "{"desc":"单选","name":"SINGLE_CHOICE"}" | "{"desc":"多选","name":"MULTIPLE_CHOICE"}" (可选) - 问题类型，枚举：QuestionsType | 可选值: "{\"desc\":\"单选\",\"name\":\"SINGLE_CHOICE\"}", "{\"desc\":\"多选\",\"name\":\"MULTIPLE_CHOICE\"}" */
    questionType?: "SINGLE_CHOICE" | "MULTIPLE_CHOICE";

    /** string (可选) - 问题文本 */
    questionText?: string;

    /** boolean (可选) - 是否必填 */
    required?: boolean;

    /** string (可选) - code */
    code?: string;

    /** "{"desc":"启用","name":"ENABLE"}" | "{"desc":"禁用","name":"DISABLE"}" (可选) - 状态，枚举：Status | 可选值: "{\"desc\":\"启用\",\"name\":\"ENABLE\"}", "{\"desc\":\"禁用\",\"name\":\"DISABLE\"}" */
    status?: "ENABLE" | "DISABLE";

    /** array (可选) */
    optionList?: XinliModels.OptionsDTO[];
  };
  export type InformationQuestionsPostItemResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.InformationQuestionsDTO (可选) */
    data?: XinliModels.InformationQuestionsDTO;
  };
  export type InformationQuestionsPostItemGeneric = {
    query: InformationQuestionsPostItemQuery;
    params: InformationQuestionsPostItemParams;
    data: InformationQuestionsPostItemBody;
    result: InformationQuestionsPostItemResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /informationQuestions/list/query
   * @summary 批量查询
   * @description
   */
  export type InformationQuestionsPostListQueryQuery = Record<string, any>;
  export type InformationQuestionsPostListQueryParams = Record<string, any>;
  export type InformationQuestionsPostListQueryBody = string[];
  export type InformationQuestionsPostListQueryResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.InformationQuestionsDTO[];
  };
  export type InformationQuestionsPostListQueryGeneric = {
    query: InformationQuestionsPostListQueryQuery;
    params: InformationQuestionsPostListQueryParams;
    data: InformationQuestionsPostListQueryBody;
    result: InformationQuestionsPostListQueryResponse;
    queryRequired: false;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /informationQuestions/questionList/{surveyId}
   * @summary 根据量表id查询问题和选项
   * @description
   */
  export type InformationQuestionsGetQuestionListBySurveyIdQuery = Record<string, any>;
  export type InformationQuestionsGetQuestionListBySurveyIdParams = {
    /** string */
    surveyId: string;
  };
  export type InformationQuestionsGetQuestionListBySurveyIdBody = any;
  export type InformationQuestionsGetQuestionListBySurveyIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** array (可选) */
    data?: XinliModels.InformationQuestionsDTO[];
  };
  export type InformationQuestionsGetQuestionListBySurveyIdGeneric = {
    query: InformationQuestionsGetQuestionListBySurveyIdQuery;
    params: InformationQuestionsGetQuestionListBySurveyIdParams;
    data: InformationQuestionsGetQuestionListBySurveyIdBody;
    result: InformationQuestionsGetQuestionListBySurveyIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
  };

  /**
   * @url /informationQuestions/page
   * @summary 多条件组合分页查询
   * @description
   */
  export type InformationQuestionsGetPageQuery = {
    /** XinliModels.InformationQuestionsPageQuery */
    params: XinliModels.InformationQuestionsPageQuery;
  };
  export type InformationQuestionsGetPageParams = Record<string, any>;
  export type InformationQuestionsGetPageBody = any;
  export type InformationQuestionsGetPageResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.BasePageInformationQuestionsDTO (可选) */
    data?: XinliModels.BasePageInformationQuestionsDTO;
  };
  export type InformationQuestionsGetPageGeneric = {
    query: InformationQuestionsGetPageQuery;
    params: InformationQuestionsGetPageParams;
    data: InformationQuestionsGetPageBody;
    result: InformationQuestionsGetPageResponse;
    queryRequired: true;
    paramsRequired: false;
    dataRequired: false;
  };

  /**
   * @url /informationQuestions/item/{id}
   * @summary 查询
   * @description
   */
  export type InformationQuestionsGetItemByIdQuery = Record<string, any>;
  export type InformationQuestionsGetItemByIdParams = {
    /** string */
    id: string;
  };
  export type InformationQuestionsGetItemByIdBody = any;
  export type InformationQuestionsGetItemByIdResponse = {
    /** number (可选) - 格式: int32 */
    code?: number;

    /** string (可选) */
    msg?: string;

    /** XinliModels.InformationQuestionsDTO (可选) */
    data?: XinliModels.InformationQuestionsDTO;
  };
  export type InformationQuestionsGetItemByIdGeneric = {
    query: InformationQuestionsGetItemByIdQuery;
    params: InformationQuestionsGetItemByIdParams;
    data: InformationQuestionsGetItemByIdBody;
    result: InformationQuestionsGetItemByIdResponse;
    queryRequired: false;
    paramsRequired: true;
    dataRequired: false;
  };
}
