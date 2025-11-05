import {
  GraphQLFloat,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';

const RootQuery = new GraphQLObjectType({
  name: 'Query',
  fields: {
    // nfts: {
    //   type: new GraphQLList(NftType),
    //   args: {
    //     start: { type: GraphQLInt },
    //     limit: { type: GraphQLInt },
    //     sortBy: { type: GraphQLString },
    //   },
    //   resolve: async (_, args) => {
    //     const start = Number.isInteger(args?.start) ? args.start : 0;
    //     const limit = Number.isInteger(args?.limit) ? args.limit : 10;
    //     const sortBy = args?.sortBy || 'recent';
    //     return await getNFTs(start, limit, sortBy);
    //   },
    // },
  }
})
const Mutation = new GraphQLObjectType({
  name: 'mutation',
  fields: {
  
  }
});

export const marketplace = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
