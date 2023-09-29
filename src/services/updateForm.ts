import axios from ".";

export const submitForm = async (message:any) => {
    try {
      const response = await axios.put(
        "/api/840.4137266056124/programs/laboriosam/application-form",
        message
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };