<template>
  <div>
    <Header :style="{ width: '100%' }">
      <Menu mode="horizontal" theme="dark" active-name="1">
        <div class="layout-logo">
          <img
            alt="Vue logo"
            src="../../assets/hublot.png"
            style="width: 50px; height: 50px"
          />
        </div>
        <div class="layout-nav">
          <MenuItem name="1">
            <router-link style="" to="/"
              ><Icon type="ios-navigate"></Icon> Home</router-link
            >
          </MenuItem>
          <MenuItem name="2">
            <router-link to="/about"
              ><Icon type="ios-keypad"></Icon> About</router-link
            >
          </MenuItem>
        </div>
        <div class="layout-nav" v-if="this.$store.state.AUTH.isLogin">
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-stats" />
              Hello User
            </template>
            <MenuGroup title="info">
              <MenuItem name="3-1">Profile</MenuItem>
            </MenuGroup>
              <MenuItem name="3-2"><p @click="logout">Logout</p></MenuItem>
          </Submenu>
        </div>
        <div class="layout-nav" v-else>
          <MenuItem name="3">
            <router-link to="/login"
              ><Icon type="ios-analytics"></Icon> Login</router-link
            >
          </MenuItem>
          <MenuItem name="4">
            <router-link to="/register"
              ><Icon type="ios-paper"></Icon> Register</router-link
            >
          </MenuItem>
        </div>
      </Menu>
    </Header>
  </div>
</template>

<script>
export default {
  name: "public-header",
  data() {
    return {
      
    };
  },
  methods: {
      async logout() {
         await this.$store
            .dispatch("AUTH/logout", {
              token: this.$store.state.AUTH.token,
            })
            .then(() => {
              this.$Message.success('Logout success');
              //console.log("Token: "+this.$store.state.AUTH.token);
              this.$store.state.AUTH.token = null;
              this.$store.state.AUTH.isLogin = false;
              //console.log("Token sau khi logout: "+this.$store.state.AUTH.token);
            });
      }
  },
};
</script>

<style scoped>
a {
  color: #ddd;
}
</style>