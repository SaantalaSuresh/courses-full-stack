
const mongoose=require('mongoose');

const VideoSchema = new mongoose.Schema(
  {
    
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
    
  },
  { timestamps: true }
);

const Video = mongoose.model("Video", VideoSchema);
module.exports = Video;
