module.exports = {
   format_date: (date) => {
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
         date
      ).getFullYear()}`;
   },
   getObjectProperty: (obj, prop) => {
      return obj[prop];
   },

   toString: (img) => {
      console.log(Buffer.toString(img));
      return Buffer.toString(img);
   },
};
