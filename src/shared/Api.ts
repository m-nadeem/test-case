//All the Api related things will be put into it with proper token handling via local or session storage etc.

export const get = async () => {
    try {
        console.log("in get")
      const response = await fetch('./data.json');
      const data = await response.json();
      return data;
    } catch (error) {        
      console.error('Error fetching the JSON data:', error);
      throw error;
    }
  };