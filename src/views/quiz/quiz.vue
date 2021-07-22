<template>
  <div>
    <h2>Quiz Conditionals Chart</h2>
    <Divider/>
    <Scroll>
      <Card
       
        icon="ios-options"
        :padding="0"
        shadow
        v-for="(item, index) in data"
        :key="index"
        style="margin: 32px 0"
      >
      <p slot="title">Câu {{ index+1}}: {{ item.question}}</p>
        <RadioGroup v-model="item.select" vertical>
          <Radio :label="item" v-for="(item, index) in item.options" :key="index">
            <Icon type="social-apple"></Icon>
            <span>{{ item }}</span>
          </Radio>
          
          {{ item.select }}
        </RadioGroup>
      </Card>
    </Scroll>
    <br/>
    <Row>
        <Col push="20">
            <Button size="large" type="success">Submit</Button>
        </Col>
    </Row>
  </div>
</template>

<script>
export default {
  data() {
    return {
       data: [{
           id:"1",
           question: "If she sold her car, she ....... much money for it.",
           options: [
               "would not get",
               "will not get",
               "did not get",
               "does not get"
           ],
           answer: "would not get",
           select: ""
       },
       {
           id:"2",
           question: "We might not stay at this hotel if Debbie ....... it to us.",
           options: [
               "did not recommend",
               "would not recommend",
               "would have recommended",
               "hadn't recommended"
           ],
           answer: "hadn't recommended",
           select: ""
       },
       {
           id:"3",
           question: "What would happen if you ....... go to work tomorrow?",
           options: [
               "did not",
               "would not",
               "will not",
               "do not"
           ],
           answer: "did not",
           select: ""
       },
       {
           id:"4",
           question: "If the company offered me the job, I think I ....... it.",
           options: [
               "would not take",
               "will not",
               "do not take",
           ],
           answer: "would not take",
           select: ""
       },
       {
           id:"5",
           question: "They're expecting us. They would be very disappointed if we .......",
           options: [
               "did not come",
               "would not come",
               "will not",
               "do not come"
           ],
           answer: "did not come",
           select: ""
       },
       {
           id:"6",
           question: "We would gladly buy the house if it ....... so small.",
           options: [
               "is not",
               "were not",
               "would not be",
               "had not been"
           ],
           answer: "were not",
           select: ""
       },
       {
           id:"7",
           question: "If I ....... a $100 bill on the street, I would keep it.",
           options: [
               "find",
               "had found",
               "would find",
               "found"
           ],
           answer: "found",
           select: ""
       },
       {
           id:"8",
           question: "It's good that Ann reminded me about Tom's birthday. I ....... if she hadn't reminded me.",
           options: [
               "would have forgotten",
               "would forget",
               "will forget",
               "had forgotten"
           ],
           answer: "would have forgotten",
           select: ""
       },
       {
           id:"9",
           question: "If I were you, I ....... him.",
           options: [
               "had married him",
               "will not",
               "do not",
               "would not"
           ],
           answer: "would not",
           select: ""
       },
       {
           id:"10",
           question: "I'm sure Lee would lend you some money. I'd be surprised he ........",
           options: [
               "would refuse",
               "will refuse",
               "refused",
           ],
           answer: "refused",
           select: ""
       },
       {
           id:"11",
           question: "I'd have sent you a postcard while I was on my vacation if I ....... your address.",
           options: [
               "rememberered",
               "remember",
               "would remember",
               "had remembered"
           ],
           answer: "had remembered",
           select: ""
       },
       {
           id:"12",
           question: "I wouldn't mind living in London if the weather .......",
           options: [
               "would be better",
               "is better",
               "were better",
               "had been better"
           ],
           answer: "were better",
           select: ""
       },
       {
           id:"13",
           question: "Many people would be out of work if that company ....... down.",
           options: [
               "closes",
               "closed",
               "will close",
               "close"
           ],
           answer: "closed",
           select: ""
       },
       {
           id:"14",
           question: "Would George be angry if I .......his bicycle without asking?",
           options: [
               "would take",
               "will take",
               "took",
               "take"
           ],
           answer: "took",
           select: ""
       },
       {
           id:"15",
           question: "I ....... you a cigarette if I had one, but I'm afraid I don't.",
           options: [
               "would give",
               "will give",
               "give",
           ],
           answer: "would give",
           select: ""
       },
       {
           id:"16",
           question: "Jim got to the bus stop in time. If he ....... the bus, he would have been late for his interview.",
           options: [
               "missed",
               "would have missed",
               "misses",
               "had missed"
           ],
           answer: "had missed",
           select: ""
       },
       {
           id:"17",
           question: "If someone ....... in here with a gun, I'd be very frightened.",
           options: [
               "will walk",
               "walked",
               "would walk",
               "walks"
           ],
           answer: "walked",
           select: ""
       },
       {
           id:"18",
           question: "I'd help you if I ......., but I'm afraid I can't.",
           options: [
               "had been able to",
               "can",
               "could have been able to",
               "could"
           ],
           answer: "could",
           select: ""
       },
       {
           id:"19",
           question: "Ann gave me this ring. She ....... terribly upset if I lost it.",
           options: [
               "will be",
               "would be",
               "is",
               "would have been"
           ],
           answer: "would be",
           select: ""
       },
       {
           id:"20",
           question: "I'm sure she ....... if you explained the situation to her.",
           options: [
               "would not get",
               "will not get",
               "did not get",
               "does not get"
           ],
           answer: "would understand",
           select: ""
       },
       ],
    };
  },
  methods: {
    name() {
      console.log("123");
    },
  },
};
</script>

<style scoped>
</style>