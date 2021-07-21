<template>
  <div id="app">
    <router-view name="layout"/>
      <div class="layout">
        <Layout>
            <Content :style="{padding: '0 50px'}">
                <Breadcrumb :style="{margin: '20px 0'}">
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Components</BreadcrumbItem>
                    <BreadcrumbItem>Layout</BreadcrumbItem>
                </Breadcrumb>
                <Card>
                    <div style="min-height: 200px;">
                        <router-view/>
                    </div>
                </Card>
            </Content>
            <Footer class="layout-footer-center">2021 &copy; Trần Nhật Nam</Footer>
        </Layout>
      </div>
  </div>
</template>




<style>
  .ivu-layout-header {
          background-color: #f8f8f9;
  }
  .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 5px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }
    .layout-footer-center{
        text-align: center;
    }
</style>
