<template>
  <h1 class="dash-title">My Dashboard</h1>
  <div class="dash-data">
    <div class="Rate">
        <p>Total Rate</p>
        <div class="Rate-table">
            <p>star photo next to rate</p>
            <p>avg</p>
            <p>4.2</p>
        </div>
        <div class="Rate-table">
            <p>reviews</p>
            <p>17</p>
        </div>
    </div>
    <div class="revenue">
        <p>Total Revenue</p>
        <div class="revenue-table">
            <p>Mounth </p>
            <p>$0</p>
        </div>
        <div class="revenue-table">
            <p>Year </p>
            <p>$9,580</p>
        </div>
        <div class="revenue-table">
            <p>Total </p>
            <p>$15,254</p>
        </div>
    </div>
    <div class="orders">
        <p>Orders management</p>
        <div class="orders-table">
            <p>Total</p>
            <p>37</p>
        </div>
        <div class="orders-table">
            <p>Pending</p>
            <p>8</p>
        </div>
        <div class="orders-table">
            <p>Approved</p>
            <p>22</p>
        </div>
        <div class="orders-table">
            <p>Declined</p>
            <p>7</p>
        </div>
    </div>
    <div class="Guests">
        <p>Guests</p>
        <div class="Guests-table">
            <p>Active</p>
            <p>3</p>
        </div>
        <div class="Guests-table">
            <p>Past</p>
            <p>34</p>
        </div>
        <div class="Guests-table">
            <p>Planned</p>
            <p>5</p>
        </div>
    </div>



  </div>
  <div class="dash-table">
    <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="imgUrl" label="" width="180" />
    <el-table-column prop="guestName" label="Guest name" width="180" />
    <el-table-column prop="checkIn" label="Check in" />
    <el-table-column prop="checkOut" label="Check out" />
    <el-table-column prop="status" label="Status" />
    <el-table-column prop="revenue" label="Revenue" />
    <el-table-column prop="action" label="Action" />
  </el-table>
  </div>
</template>

<script>

export default {
  mane: "dashboard",
  components: {
 
  },
  data() {
    return {
        orders: 
        [
            {
                imgUrl:"img",
                guestName:"yossi chen",
                checkIn:'2016-05-01',
                checkOut:'2016-05-03',
                status:'panding',
                revenue:'$100',
                action:"aprov/decline",
            },
            {
                imgUrl:"img",
                guestName:"mor revah",
                checkIn:'2016-05-01',
                checkOut:'2016-05-03',
                status:'panding',
                revenue:'$150',
                action:"approv/decline",
            },
            {
                imgUrl:"img",
                guestName:"mor revah",
                checkIn:'2016-05-01',
                checkOut:'2016-05-03',
                status:'panding',
                revenue:'$150',
                action:"approv/decline",
            }

        ]
    }
  },
  methods: {
  },
  computed: {
  
  },
  created() {
  },
  unmounted() {},
}
</script>
