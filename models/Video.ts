import mongoose, {Schema, model, models} from "mongoose";
import bcrypt from "bcryptjs";
import { time } from "console";

export const VIDEO_DIMENSIONS = {
    width: 1080,
    height: 1920,
} as const

export interface IVideo {
    _id?: mongoose.Types.ObjectId;
    title: string;
    description: string;
    videoUrl: string;
    thumbnailUrl: string;
    controls?: boolean;
    transformation?: {
        height: number;
        width: number;
        quality?: number
    },
    createdAt?: Date;
    updatedAt?: Date
};

const videoSchema = new Schema<IVideo> (
    {
        title: {types: String, required: true},
        description: {types: String, required: true},
        videoUrl: {types: String, required: true},
        thumbnailUrl: {types: String, required: true},
        controls: {types: Boolean, default: true},
        transformation: {
            height: {type: Number, default: VIDEO_DIMENSIONS.height},
            width: {type: Number, default: VIDEO_DIMENSIONS.width},
            quality: {type: Number, min: 1, max: 100}
        }
    },
    { timestamps: true}
    
);

const video = models?.Video || model<IVideo>("User", videoSchema)

export default video;