<template>
  <div>
    <table class="table table-inverse center" style="width:80%">
      <thead>
        <tr>
          <th class="col-md-3">Id</th>
          <th class="col-md-2">Customer</th>
          <th class="col-md-2">Date</th>
          <th class="col-md-5">Items</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="ord in orders" :key="ord.id">
          <td>{{ord.id}}</td>
          <td>{{ord.customer}}</td>
          <td>{{ord.date}}</td>
          <td>
            <div class="list-group" v-for="item of ord.items" :key="item.id">
              <a
                href="#"
                class="list-group-item list-group-item-action list-group-item-info"
              >{{ item.title }} (Number:{{item.count}}, Total price: {{ item.count*item.price }})</a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'orders',
  data () {
    return {
      user: null,
      orders: []
    }
  }
}
</script>
