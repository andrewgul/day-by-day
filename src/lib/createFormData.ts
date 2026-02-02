export const createFormData = (record: Record<string, string>): FormData => {
  const formData = new FormData();

  Object.entries(record).forEach(([key, value]) => {
    formData.append(key, value);
  });

  return formData;
};
