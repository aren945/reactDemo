export default {
  formateDate(time: number): string {
    if (!time) { return ''; }
    const date = new Date(time);
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  },

  /**
   * 分页器
   * @param data 
   * @param callback 
   */
  pagination(data: any, callback: any): void {

  }


};
