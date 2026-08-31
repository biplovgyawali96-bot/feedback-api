let feedbackArray = [];
let nextId = 1;

function addOne(sender, message, rating, platform) {
  const newFeedback = {
    id: nextId++,
    sender,
    message,
    rating,
    platform,
  };

  feedbackArray.push(newFeedback);
  return newFeedback;
}

function getAll() {
  return feedbackArray;
}

function findById(id) {
  const feedback = feedbackArray.find((item) => item.id == id);

  if (feedback) {
    return feedback;
  }

  return null;
}

function update(id, updatedData) {
  const feedback = findById(id);

  if (feedback) {
    if (updatedData.sender) {
      feedback.sender = updatedData.sender;
    }

    if (updatedData.message) {
      feedback.message = updatedData.message;
    }

    if (updatedData.rating) {
      feedback.rating = updatedData.rating;
    }

    if (updatedData.platform) {
      feedback.platform = updatedData.platform;
    }

    return feedback;
  }

  return null;
}

if (require.main === module) {
  addOne("John Smith", "Great session!", 5, "mobile");
  addOne("Anna Brown", "Very useful examples.", 4, "desktop");

  console.log("getAll called:", getAll());
  console.log("findById called:", findById(1));
  console.log("update called:", update(1, { rating: 4 }));
}

module.exports = {
  addOne,
  getAll,
  findById,
  update,
};