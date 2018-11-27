export default {
  formateDate(time: number): string {
    if (!time) { return ''; }
    const date = new Date(time);
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }
};
