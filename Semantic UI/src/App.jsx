function App() {
  return <>
  <table class="ui celled padded table">
  <thead>
    <tr><th class="single line">Evidence Rating</th>
    <th>Effect</th>
    <th>Efficacy</th>
    <th>Consensus</th>
    <th>Comments</th>
  </tr></thead>
  <tbody>
    <tr>
      <td>
        <h2 class="ui center aligned header">A</h2>
      </td>
      <td class="single line">
        Power Output
      </td>
      <td>
        <div class="ui star rating" data-rating="3" data-max-rating="3"></div>
      </td>
      <td class="right aligned">
        80% <br/>
        <a href="#">18 studies</a>
      </td>
      <td>Creatine supplementation is the reference compound for increasing muscular creatine levels; there is variability in this increase, however, with some nonresponders.</td>
    </tr>
    <tr>
      <td>
        <h2 class="ui center aligned header">A</h2>
      </td>
      <td class="single line">
        Weight
      </td>
      <td>
        <div class="ui star rating" data-rating="3" data-max-rating="3"></div>
      </td>
      <td class="right aligned">
        100% <br/>
        <a href="#">65 studies</a>
      </td>
      <td>Creatine is the reference compound for power improvement, with numbers from one meta-analysis to assess potency</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><th colspan="5">
      <div class="ui right floated pagination menu">
        <a class="icon item">
          <i class="left chevron icon"></i>
        </a>
        <a class="item">1</a>
        <a class="item">2</a>
        <a class="item">3</a>
        <a class="item">4</a>
        <a class="icon item">
          <i class="right chevron icon"></i>
        </a>
      </div>
    </th>
  </tr></tfoot>
</table>

<br />

<i class="american sign language interpreting icon"></i>
<i class="assistive listening systems icon"></i>
<i class="audio description icon"></i>
<i class="blind icon"></i>
<i class="braille icon"></i>
<i class="closed captioning icon"></i>
<i class="closed captioning outline icon"></i>
<i class="deaf icon"></i>
<i class="low vision icon"></i>
<i class="phone volume icon"></i>
<i class="question circle icon"></i>
<i class="question circle outline icon"></i>
<i class="sign language icon"></i>
<i class="tty icon"></i>
<i class="universal access icon"></i>
<i class="wheelchair icon"></i>

<div class="ui cards">
  <div class="card">
    <div class="content">
      <img class="right floated mini ui image" src="/images/avatar/large/elliot.jpg"/>
      <div class="header">
        Elliot Fu
      </div>
      <div class="meta">
        Friends of Veronika
      </div>
      <div class="description">
        Elliot requested permission to view your contact details
      </div>
    </div>
    <div class="extra content">
      <div class="ui two buttons">
        <div class="ui basic green button">Approve</div>
        <div class="ui basic red button">Decline</div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="content">
      <img class="right floated mini ui image" src="/images/avatar/large/jenny.jpg"/>
      <div class="header">
        Jenny Hess
      </div>
      <div class="meta">
        New Member
      </div>
      <div class="description">
        Jenny wants to add you to the group <b>best friends</b>
      </div>
    </div>
    <div class="extra content">
      <div class="ui two buttons">
        <div class="ui basic green button">Approve</div>
        <div class="ui basic red button">Decline</div>
      </div>
    </div>
  </div>
</div>
  </>;


}

export default App;
