/*
*Session Storage封装
*/
const STORAGE_KEY = 'mall';
export default {
    // 存储值
    setItem(key, value, module_name) {
        if(module_name){
            let val = this.getItem(module_name)
            val[key] = value
            this.setItem(module_name,val)
        }else{
            let val = this.getStorage()
            val[key] = value
            window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val))
        }
    },
    // 获取某一模板下的属性值
    getItem(key, module_name) {
        if(module_name){
            let val = this.getItem(module_name)
            if(val) return val[key]
        }
        return this.getStorage()[key]
    },
    // 获取Storage
    getStorage() {
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
    },
    // 清除某一模板下的属性值
    clear(key, module_name) {
        let val = this.getStorage()
        if(module_name){
            if(!val[module_name]) return;
            delete val[module_name][key]
        }else{
            delete val[key]
        }
        console.log(val)
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    }
}