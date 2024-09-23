const getFullName = (userDetails) => {
    const { first_name, middle_name, last_name } = userDetails || {};
  
    // Filter out null, undefined, or empty string values
    const nameParts = [first_name, middle_name, last_name].filter(Boolean);
  
    return nameParts.join(' ').trim();
  };

  export default getFullName