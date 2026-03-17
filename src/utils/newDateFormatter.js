function formatDate(date){

    const today = new Date();
    const txDate = new Date(date);

    const diff = Math.floor((today - txDate) / (1000 * 60 * 60 * 24));

    if(diff === 0) return "Today";
    if(diff === 1) return "Yesterday";

    return txDate.toLocaleDateString("en-IN", {
      day:"2-digit",
      month:"long",
      year:"numeric"
    });

  }