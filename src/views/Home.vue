<template>
  <section class="bg-gray-100">
    <div class="container mx-auto">
      <ApolloQuery :query="require('../graphql/GetLinks.gql')">
        <template v-slot="{ result: { error, data } }">
          <h1 v-if="error">An error occurred, please try again later.</h1>
          <div v-if="data" class="flex flex-auto justify-center items-center text-center h-screen">
            <div class="max-w-md">
              <a v-for="item in data.locises" :key="item.id" :href="item.url" target="blank">
                <h2
                  class="font-medium hover:font-semibold transform hover:scale-110 opacity-50 hover:opacity-100 px-24 py-8 rounded shadow hover:shadow-xl mt-8 bg-white hover:bg-purple-700 text-black hover:text-white"
                >{{ item.title }}</h2>
              </a>
            </div>
          </div>
        </template>
      </ApolloQuery>
    </div>
  </section>
</template>

<script>
export default {}
</script>
