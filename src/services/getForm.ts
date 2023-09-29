import axios from ".";

export const getDetail = async () => {
    try {
        const response = await axios.get("/api/645.7761796902868/programs/sit/application-form");
        return response.data;
      } catch (error) {
        throw error;
      }
  };