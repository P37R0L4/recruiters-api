import Recruiters from "../../../models/recruiters";

export default {
  Query: {
    recruiters: async () => await Recruiters.find(),
    recruiter: async (_: any, { id }: any) => await Recruiters.findById(id),
  },
  Mutation: {
    createRecruiter: async (_: any, { values }: any) =>
      await Recruiters.create(values),
    updateRecruiter: async (_: any, { values, id }: any) =>
      await Recruiters.findOneAndUpdate(id, values, { new: true }),
    deleteRecruiter: async (_: any, { id }: any) =>
      !!(await Recruiters.findOneAndDelete(id)),
  },
};
