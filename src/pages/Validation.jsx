export const FormValid = (value) => {
  const error = {};

  // Name validation
  if (!value.name) {
    error.nameErr = "Name is required";
  } else if (value.name.length < 3 || value.name.length > 100) {
    error.nameErr = "Name must be between 3 and 100 characters";
  }

  // Email validation
  if (!value.email) {
    error.emailErr = "Email is required";
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value.email)) {
      error.emailErr = "Enter a valid email address";
    }
  }

  // WhatsApp validation (Indian number, 10 digits)
  if (!value.whatsapp) {
    error.whatsappErr = "WhatsApp Number is required";
  } else {
    const whatsappRegex = /^[6-9]\d{9}$/;
    if (!whatsappRegex.test(value.whatsapp)) {
      error.whatsappErr = "Enter a valid 10-digit Indian WhatsApp number";
    }
  }

  // Wedding Details validation
  if (!value.weddingDetails) {
    error.detailsErr = "Wedding details are required";
  } else if (
    value.weddingDetails.length < 10 ||
    value.weddingDetails.length > 500
  ) {
    error.detailsErr =
      "Wedding details must be between 10 and 500 characters";
  }

  if(value.location==='') error.locationErr="Location is required."
  // Date validation (must be a future date)
  if (!value.date) {
    error.dateErr = "Date is required";
  } else {
    const selectedDate = new Date(value.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate <= today) {
      error.dateErr = "Date must be an upcoming (future) date";
    }
  }

  // Days validation (must be greater than 1)
  if (!value.days) {
    error.daysErr = "Days is required";
  } else if (isNaN(value.days) || parseInt(value.days) <= 1) {
    error.daysErr = "Days must be greater than 1";
  }

  return error;
};
