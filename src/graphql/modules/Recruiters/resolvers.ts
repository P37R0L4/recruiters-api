import Recruiters from "../../../models/recruiters";

export default {
  Query: {
    recruiters: async () => await Recruiters.find(),
    recruiter: async (_: any, { id }: any) => await Recruiters.findById(id),
  },
  Mutation: {
    createRecruiter: async (_: any, { data }: any) =>
      await Recruiters.create(data),
    updateRecruiter: async (_: any, { data, id }: any) =>
      await Recruiters.findOneAndUpdate(id, data, { new: true }),
    deleteRecruiter: async (_: any, { id }: any) =>
      !!(await Recruiters.findOneAndDelete(id)),
  },
};
