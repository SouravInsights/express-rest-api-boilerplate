import mongoose from 'mongoose'

const projectsSchema = new mongoose.Schema()

export const Projects = mongoose.model('projects', projectsSchema)