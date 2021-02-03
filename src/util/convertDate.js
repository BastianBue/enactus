function convertDate(date) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const newDate = new Date(date);
  const month = monthNames[newDate.getMonth()];
  const day = String(newDate.getDate()).padStart(2, "0");
  const year = newDate.getFullYear();
  const output = month + "\n" + day + ", " + year;

  return output;
}

module.exports = { convertDate };
