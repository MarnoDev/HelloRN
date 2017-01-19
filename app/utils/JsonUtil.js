/**
 * Created by marno on 2017/1/19
 * Function:JSON转换工具类
 * Desc:
 */

export default class JsonUtil {

    /**
     * JSON对象转字符串
     * @param jsonObj JSON对象
     */
    static jsonToString(jsonObj){
        return JSON.stringify(jsonObj);
    }

    /**
     * 字符串转JSON字符串
     * @param jsonStr JSON字符串
     */
    static stringToJson(jsonStr){
        return JSON.parse(jsonStr);
    }
}