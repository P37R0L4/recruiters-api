import Recruiters from '../../../models/recruiters';

export default {
  Query: {
    recruiters: async () => {
      try {
        const data = await Recruiters.find();
        console.log(data);
        return await data;
      } catch (err) {
        console.log(err);
      }
    },
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
