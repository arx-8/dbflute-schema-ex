/* eslint-disable */

/**
 * Schema for maihamadb
 * @see http://dbflute.seasar.org/ja/data/doc/harbor/schema-maihamadb.html
 */
export const testHtml = `<html lang="en">
<!-- main language (to avoid HTML validator) -->

<head>
  <meta charset="UTF-8">
  <title>maihamadb schema</title>
  <style type="text/css">
    /* -------------------------------------------------
                                             Core
------------------------------------------------- */
    * {
      margin: 0;
      padding: 0;
    }

    body {
      font-family: Verdana, "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3", Meiryo, "メイリオ", "MS P Gothic", "MS Pゴシック", sans-serif;
      font-size: 80%;
      margin: 10px 5px 5px 15px;
      background-color: #ffffe0;
    }

    /* -------------------------------------------------
                                        Structure
------------------------------------------------- */
    h1 {
      font-size: 1.5em;
      border-bottom: 2px solid #af0000;
      border-top: 2px solid #af0000;
    }

    h2 {
      margin: 30px 0 5px 0;
      font-size: 1.8em;
      border-bottom: 2px solid #af0000;
      border-left: 10px solid #af0000;
      text-indent: 10px;
    }

    h3 {
      padding: 0 0 0 10px;
      margin: 1em 10% 0 0;
      border-top: double 3px #af0000;
      border-bottom: solid 1px #333333;
      font-size: 1.5em;
      color: #333333;
    }

    h4 {
      padding: 0 0 0 10px;
      margin: 1em 10% 0 1em;
      border-top: none;
      border-bottom: solid 1px #663333;
      font-size: 1.3em;
      color: #333333;
    }

    /* -------------------------------------------------
                                     Whole Header
------------------------------------------------- */
    .updatedate {
      text-align: right;
    }

    .mainschema {
      text-align: right;
    }

    .navilinkarea {
      text-align: right;
    }

    .sublink {
      margin-top: 0.1em;
    }

    .sisterlink {
      margin-top: 0.6em;
      font-size: 120%;
    }

    .sistersublink {
      margin-top: 0.6em;
      font-size: 85%;
    }

    .sisterneighborlink {
      margin-top: 0.6em;
      font-size: 100%;
    }

    /* -------------------------------------------------
                                   Keyword Search
------------------------------------------------- */
    .keywordsearch {
      padding: 0.7em 0 0.7em 0;
    }

    .searchmemo {
      font-size: 0.9em;
      color: #114488;
    }

    .suggestionarea {
      padding: 0 0.2em 0.2em 0.2em;
      margin: 0;
      position: absolute;
      zindex: 100;
      background-color: #DDFFDD;
      border-width: 1px;
      border-style: solid;
      border-color: #CCCCCC;
      list-style-type: none;
    }

    /* -------------------------------------------------
                                   Database Table
------------------------------------------------- */
    table {
      border-collapse: collapse;
    }

    table,
    th {
      border: 1px solid #555;
    }

    th {
      background-color: #cc9;
      font-size: 0.8em;
    }

    td {
      border-bottom: 1px dotted #aaa;
      border-left: 1px solid #555;
      padding: 2px;
    }

    .tablecomment {
      font-size: 0.8em;
      color: #3F7E5E;
      padding: 0 0 0.2em 1em;
    }

    .rownumhead {
      text-align: center;
      font-size: 0.4em;
    }

    .rownumcell {
      text-align: center;
      font-size: 0.4em;
      color: #444;
    }

    .schemacell {
      font-size: 0.8em;
      white-space: nowrap;
    }

    .aliascell {
      white-space: nowrap;
    }

    .flgcell {
      text-align: center;
    }

    .flgplus {
      font-size: 0.7em;
    }

    .typecell {
      font-size: 0.6em;
    }

    .sizecell {
      text-align: center;
      font-size: 0.8em;
    }

    .defvalcell {
      text-align: center;
      font-size: 0.6em;
    }

    .relcell {
      font-size: 0.7em;
    }

    .commentcell {
      font-size: 0.7em;
      color: #3F7E5E;
    }

    .commentcellerror {
      color: red;
    }

    .subcell {
      font-size: 0.6em;
    }

    .comcolcell {
      color: #666;
    }

    .optcell {
      font-style: italic;
    }

    .additionalpk {
      font-style: italic;
    }

    .additionalfk {
      font-style: italic;
    }

    .clstypecell {
      text-align: center;
      font-size: 0.8em;
    }

    .commentdesc {
      color: #3F7E5E;
    }

    /* inner table */
    table.child {
      margin: 3px;
    }

    table.child th {
      font-size: 0.7em;
    }

    table.child,
    table.child td,
    table.child th {
      border-top: none;
      border-left: none;
      border-bottom: 1px solid #aaa;
      border-right: 1px solid #aaa;
    }

    .clsgroup {
      font-size: 1.2em;
      padding-left: 4px;
      padding-right: 4px;
    }

    /* table supplementary info */
    span.tableschematitle {
      font-size: 0.5em;
      color: #888888;
    }

    span.tablefirstdatetitle {
      font-size: 0.5em;
      color: #888888;
    }

    /* -------------------------------------------------
                                    Arrange Query
------------------------------------------------- */
    span.arrqycount {
      font-size: 0.5em;
    }

    dl.arrqylist {
      margin-top: 0.7em;
      padding-left: 3em;
    }

    dl.arrqylist dt {
      display: list-item;
      list-style-type: circle;
      font-size: 1.3em;
      margin-top: 0.3em;
    }

    dl.arrqylist dd {
      padding-left: 1em;
    }

    dl.arrqylist dd pre {
      font-size: 1.1em;
    }

    dl.arrqylist dd.subinfo {
      padding-left: 2em;
    }

    dl.arrqylist dd.subinfo span.sqlap {
      font-style: italic;
      color: #002266;
    }

    dl.arrqylist dd.subinfo span.file {
      font-style: italic;
      color: #002266;
    }

    dl.arrqylist dd.subinfo span.ctet {
      color: green;
    }

    dl.arrqylist dd.subinfo span.pmb {
      color: green;
    }

    /* -------------------------------------------------
                             Behavior Query Path
------------------------------------------------- */
    span.bqpcount {
      font-size: 0.5em;
    }

    dl.bqplist {
      padding-left: 2em;
    }

    dl.bqplist dt {
      display: list-item;
      font-size: 1.3em;
      margin-top: 0.3em;
    }

    dl.bqplist dd {
      padding-left: 1em;
    }

    dl.bqplist dd pre {
      font-size: 1.1em;
    }

    dl.bqplist dd.subinfo {
      padding-left: 2em;
    }

    dl.bqplist dd.subinfo span.sqlap {
      font-style: italic;
      color: #002266;
    }

    dl.bqplist dd.subinfo span.file {
      font-style: italic;
      color: #002266;
    }

    dl.bqplist dd.subinfo span.ctet {
      color: green;
    }

    dl.bqplist dd.subinfo span.pmb {
      color: green;
    }

    /* -------------------------------------------------
                                 Stored Procedure
------------------------------------------------- */
    dl.procedurelist {
      padding-left: 2em;
    }

    dl.procedurelist dt {
      display: list-item;
      font-size: 1.3em;
      margin-top: 0.3em;
    }

    dl.procedurelist dt span.type {
      font-size: 0.7em;
      color: green;
    }

    dl.procedurelist dd {
      padding-left: 1em;
    }

    dl.procedurelist dd pre {
      font-size: 1.1em;
    }

    dl.procedurelist dd.column {
      font-style: italic;
      padding-left: 2em;
    }

    dl.procedurelist dd.column span.attrs {
      font-size: 0.7em;
      color: #125699;
    }

    dl.procedurelist dd.column span.type {
      font-size: 0.9em;
      color: green;
    }

    dl.procedurelist dd.column pre {
      padding-left: 1em;
    }

    /* -------------------------------------------------
                                  Decomment Modal
------------------------------------------------- */
    .decommentmodal {
      display: none;
      position: fixed;
      z-index: 5;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      padding-top: 50px;
      background-color: rgba(0, 0, 0, 0.5);
    }

    .decommentmodalcontent {
      position: relative;
      z-index: 10;
      width: 50%;
      margin: 0 auto;
      border: 1px solid #999999;
      padding: 15px;
      background-color: #fff8f8;
      border-radius: 4px;
    }

    .decommentmodalcontent p {
      font-size: 14px;
      color: #222277;
    }

    .decommentinput {
      display: block;
      width: 100%;
      margin-top: 10px;
      font-size: 12px;
    }

    .decommentmodal-ok-area {
      text-align: right;
      margin: 0em 1em 0em 0em
    }

    .decommentmodal-ok-btn {
      display: inline-block;
      margin: 0.5em 0em;
      padding: 0.5em 1.5em 0.5em 1.5em;
      text-decoration: none;
      border-radius: 3px;
      font-weight: bold;
      color: #FFF;
      text-align: right;
      background-image: -webkit-linear-gradient(45deg, #709dff 0%, #b0c9ff 100%);
      background-image: linear-gradient(45deg, #709dff 0%, #b0c9ff 100%);
      transition: .4s;
    }

    .decommentmodal-ok-btn:hover {
      background-image: -webkit-linear-gradient(45deg, #709dff 50%, #b0c9ff 100%);
      background-image: linear-gradient(45deg, #709dff 50%, #b0c9ff 100%);
    }

    .decommentmodal-close-btn {
      position: absolute;
      margin-left: 10px;
      padding: 0;
      right: 10px;
      top: 5px;
      cursor: pointer;
      width: 28px;
      height: 28px;
      border: 0;
      border-radius: 50%;
      color: #657786;
      font-size: 14px;
      line-height: 24px;
      text-align: center;
      transition: box-shadow .15s ease-in-out;
    }

    .decommentmodal-close-btn:hover {
      background-color: #eed;
    }

    .decomment-user-input {
      display: none;
    }

    .decomment-user-name {
      margin-top: 0.5em;
      padding: 5px;
      border: thin solid #aa3344;
    }

    .decomment-user-name-desc {
      margin-left: 0.5em;
      color: #222277;
    }
  </style>
</head>

<body>
  <h1>Schema for maihamadb (h2)</h1>
  <p class="mainschema">generated from <strong>MAIHAMADB.PUBLIC</strong></p>
  <div class="navilinkarea">
    <p class="sublink">
      <a href="#cdef">Classification Definition</a>
      | <a href="#arrangequery">ArrangeQuery List</a>
      | <a href="#procedure">Procedure List</a>
      | <a href="#diagram">Schema Diagram</a>
    </p>
    <p class="sisterlink"><a href="./history-maihamadb.html">to HistoryHTML</a></p>
    <p class="sistersublink">
      <a href="./properties-maihamadb.html">to PropertiesHTML</a>
      | <a href="./lastadoc-harbor.html">to lastadoc-harbor.html</a>
    </p>
  </div>

  <div style="display:none" id="unmapped-tables">
    <h2>Decomment Unmapped Tables</h2>
    <table>
      <thead id="unmapped-table-head">
        <tr>
          <th>No</th>
          <th>Table Name</th>
          <th class="conflictcell">Conflict Mapping Name</th>
          <th>Mapping</th>
        </tr>
      </thead>
      <tbody id="unmapped-table-body"></tbody>
    </table>
    <button id="table-mapping-submit-button">Mapping</button>
  </div>

  <div style="display:none" id="unmapped-columns">
    <h2>Decomment Unmapped Columns</h2>
    <ul id="unmapped-column-list">
    </ul>
    <table>
      <thead id="unmapped-column-head">
        <tr>
          <th>No</th>
          <th>Table Name</th>
          <th>Column Name</th>
          <th class="conflictcell">Conflict Mapping Name</th>
          <th>Mapping</th>
        </tr>
      </thead>
      <tbody id="unmapped-column-body"></tbody>
    </table>
    <button id="column-mapping-submit-button">Mapping</button>
  </div>

  <h2>Table List</h2>
  <div class="keywordsearch">
    <input type="text" id="incremental-search-field" tabindex="1" value="" placeholder="Table Search">
    <ul id="suggestion-list" class="suggestionarea">
      <li style="display: none;"><a href="#member" data-name="member">member</a></li>
      <li style="display: none;"><a href="#member_address" data-name="member_address">member_address</a></li>
      <li style="display: none;"><a href="#member_following" data-name="member_following">member_following</a>
      </li>
      <li style="display: none;"><a href="#member_login" data-name="member_login">member_login</a></li>
      <li style="display: none;"><a href="#member_security" data-name="member_security">member_security</a></li>
      <li style="display: none;"><a href="#member_service" data-name="member_service">member_service</a></li>
      <li style="display: none;"><a href="#member_status" data-name="member_status">member_status</a></li>
      <li style="display: none;"><a href="#member_withdrawal" data-name="member_withdrawal">member_withdrawal</a>
      </li>
      <li style="display: none;"><a href="#product" data-name="product">product</a></li>
      <li style="display: none;"><a href="#product_category" data-name="product_category">product_category</a>
      </li>
      <li style="display: none;"><a href="#product_status" data-name="product_status">product_status</a></li>
      <li style="display: none;"><a href="#purchase" data-name="purchase">purchase</a></li>
      <li style="display: none;"><a href="#purchase_payment" data-name="purchase_payment">purchase_payment</a>
      </li>
      <li style="display: none;"><a href="#region" data-name="region">region</a></li>
      <li style="display: none;"><a href="#service_rank" data-name="service_rank">service_rank</a></li>
      <li style="display: none;"><a href="#withdrawal_reason" data-name="withdrawal_reason">withdrawal_reason</a>
      </li>
      <li style="display: none;"><a href="#member" data-name="member">member</a></li>
      <li style="display: none;"><a href="#member_address" data-name="member_address">member_address</a></li>
      <li style="display: none;"><a href="#member_following" data-name="member_following">member_following</a>
      </li>
      <li style="display: none;"><a href="#member_login" data-name="member_login">member_login</a></li>
      <li style="display: none;"><a href="#member_security" data-name="member_security">member_security</a></li>
      <li style="display: none;"><a href="#member_service" data-name="member_service">member_service</a></li>
      <li style="display: none;"><a href="#member_status" data-name="member_status">member_status</a></li>
      <li style="display: none;"><a href="#member_withdrawal" data-name="member_withdrawal">member_withdrawal</a>
      </li>
      <li style="display: none;"><a href="#product" data-name="product">product</a></li>
      <li style="display: none;"><a href="#product_category" data-name="product_category">product_category</a>
      </li>
      <li style="display: none;"><a href="#product_status" data-name="product_status">product_status</a></li>
      <li style="display: none;"><a href="#purchase" data-name="purchase">purchase</a></li>
      <li style="display: none;"><a href="#purchase_payment" data-name="purchase_payment">purchase_payment</a>
      </li>
      <li style="display: none;"><a href="#region" data-name="region">region</a></li>
      <li style="display: none;"><a href="#service_rank" data-name="service_rank">service_rank</a></li>
      <li style="display: none;"><a href="#withdrawal_reason" data-name="withdrawal_reason">withdrawal_reason</a>
      </li>
    </ul>
    <span class="searchmemo">*Push 'tab' (primary tab order)</span>
  </div>
  <table>
    <thead>
      <tr>
        <th class="rownumhead">No.</th>
        <th>Alias</th>
        <th>Name</th>
        <th>Type</th>
        <th>ForeignTable</th>
        <th>ReferrerTable</th>
        <th>TableComment</th>
        <th>EntityName</th>
      </tr>
    </thead>
    <tbody id="table-list-body">
      <tr>
        <td class="rownumcell">1</td>
        <td class="aliascell">会員</td>
        <td class="namecell" data-name="MEMBER"><a href="#member"
            title="type=TABLE, primaryKey={MEMBER_ID}, nameLength=6, columnCount=11">MEMBER</a></td>
        <td class="typecell">TABLE</td>
        <td class="relcell"><a href="#member_status" title="FK_MEMBER_MEMBER_STATUS">MEMBER_STATUS</a>, <a
            href="#member_address" class="additionalfk"
            title="FK_MEMBER_MEMBER_ADDRESS_VALID: fixedCondition=&quot;$$foreignAlias$$.VALID_BEGIN_DATE <= /*$$locationBase$$.parameterMapMemberAddressAsValid.targetDate*/null\n     and $$foreignAlias$$.VALID_END_DATE >= /*$$locationBase$$.parameterMapMemberAddressAsValid.targetDate*/null&quot;, comment=Member's address at the target date.">MEMBER_ADDRESS(AsValid)</a>,
          <a href="#member_login" class="additionalfk"
            title="FK_MEMBER_MEMBER_LOGIN_LATEST: fixedCondition=&quot;$$foreignAlias$$.LOGIN_DATETIME = ($$sqbegin$$\nselect max(login.LOGIN_DATETIME)\n  from MEMBER_LOGIN login\n where login.MEMBER_ID = $$foreignAlias$$.MEMBER_ID\n)$$sqend$$&quot;">MEMBER_LOGIN(AsLatest)</a>
        </td>
        <td class="relcell"><a href="#member_address" title="FK_MEMBER_ADDRESS_MEMBER">MEMBER_ADDRESS</a>, <a
            href="#member_following" title="FK_MEMBER_FOLLOWING_MY_MEMBER">MEMBER_FOLLOWING</a>, <a
            href="#member_following" title="FK_MEMBER_FOLLOWING_YOUR_MEMBER">MEMBER_FOLLOWING</a>, <a
            href="#member_login" title="FK_MEMBER_LOGIN_MEMBER">MEMBER_LOGIN</a>, <a href="#member_security"
            title="FK_MEMBER_SECURITY_MEMBER">MEMBER_SECURITY</a>, <a href="#member_service"
            title="FK_MEMBER_SERVICE_MEMBER">MEMBER_SERVICE</a>, <a href="#member_withdrawal"
            title="FK_MEMBER_WITHDRAWAL_MEMBER">MEMBER_WITHDRAWAL</a>, <a href="#purchase"
            title="FK_PURCHASE_MEMBER">PURCHASE</a></td>
        <td class="commentcell MEMBER_comment">
          <pre>会員のプロフィールやアカウントなどの基本情報を保持する。
基本的に物理削除はなく、退会したらステータスが退会会員になる。
ライフサイクルやカテゴリの違う会員情報は、one-to-oneなどの関連テーブルにて。</pre>
        </td>
        <td class="subcell">Member</td>
      </tr>
      <tr>
        <td class="rownumcell">2</td>
        <td class="aliascell">会員住所情報</td>
        <td class="namecell" data-name="MEMBER_ADDRESS"><a href="#member_address"
            title="type=TABLE, primaryKey={MEMBER_ADDRESS_ID}, nameLength=14, columnCount=11">MEMBER_ADDRESS</a>
        </td>
        <td class="typecell">TABLE</td>
        <td class="relcell"><a href="#member" title="FK_MEMBER_ADDRESS_MEMBER">MEMBER</a>, <a href="#region"
            title="FK_MEMBER_ADDRESS_REGION">REGION</a></td>
        <td class="relcell">&nbsp;</td>
        <td class="commentcell MEMBER_ADDRESS_comment">
          <pre>会員の住所に関する情報で、同時に有効期間ごとに履歴管理されている。
会員を基点に考えた場合、構造的には one-to-many だが、業務的な定型条件で one-to-one になる。このような構造を「業務的one-to-one」と呼ぶ！
有効期間は隙間なく埋められるが、ここでは住所情報のない会員も存在し、厳密には(業務的な) "1 : 0..1" である。</pre>
        </td>
        <td class="subcell">MemberAddress</td>
      </tr>
      <tr>
        <td class="rownumcell">3</td>
        <td class="aliascell">会員フォローイング</td>
        <td class="namecell" data-name="MEMBER_FOLLOWING"><a href="#member_following"
            title="type=TABLE, primaryKey={MEMBER_FOLLOWING_ID}, nameLength=16, columnCount=4">MEMBER_FOLLOWING</a>
        </td>
        <td class="typecell">TABLE</td>
        <td class="relcell"><a href="#member" title="FK_MEMBER_FOLLOWING_MY_MEMBER">MEMBER</a>, <a href="#member"
            title="FK_MEMBER_FOLLOWING_YOUR_MEMBER">MEMBER</a></td>
        <td class="relcell">&nbsp;</td>
        <td class="commentcell MEMBER_FOLLOWING_comment">
          <pre>とある会員が他の会員をフォローできる。すると、フォローした会員の購入履歴が閲覧できる。</pre>
        </td>
        <td class="subcell">MemberFollowing</td>
      </tr>
      <tr>
        <td class="rownumcell">4</td>
        <td class="aliascell">会員ログイン</td>
        <td class="namecell" data-name="MEMBER_LOGIN"><a href="#member_login"
            title="type=TABLE, primaryKey={MEMBER_LOGIN_ID}, nameLength=12, columnCount=5">MEMBER_LOGIN</a>
        </td>
        <td class="typecell">TABLE</td>
        <td class="relcell"><a href="#member" title="FK_MEMBER_LOGIN_MEMBER">MEMBER</a>, <a href="#member_status"
            title="FK_MEMBER_LOGIN_MEMBER_STATUS">MEMBER_STATUS</a></td>
        <td class="relcell">&nbsp;</td>
        <td class="commentcell MEMBER_LOGIN_comment">
          <pre>ログインするたびに登録されるログイン履歴。
登録されたら更新されるも削除されることもない。さらには、登録する人もプログラムもはっきりしているので、(紙面の都合上もあって)ここでは共通カラムは省略している。</pre>
        </td>
        <td class="subcell">MemberLogin</td>
      </tr>
      <tr>
        <td class="rownumcell">5</td>
        <td class="aliascell">会員セキュリティ情報</td>
        <td class="namecell" data-name="MEMBER_SECURITY"><a href="#member_security"
            title="type=TABLE, primaryKey={MEMBER_ID}, nameLength=15, columnCount=10">MEMBER_SECURITY</a>
        </td>
        <td class="typecell">TABLE</td>
        <td class="relcell"><a href="#member" title="FK_MEMBER_SECURITY_MEMBER">MEMBER</a></td>
        <td class="relcell">&nbsp;</td>
        <td class="commentcell MEMBER_SECURITY_comment">
          <pre>会員とは one-to-one で、会員一人につき必ず一つのセキュリティ情報がある</pre>
        </td>
        <td class="subcell">MemberSecurity</td>
      </tr>
      <tr>
        <td class="rownumcell">6</td>
        <td class="aliascell">会員サービス</td>
        <td class="namecell" data-name="MEMBER_SERVICE"><a href="#member_service"
            title="type=TABLE, primaryKey={MEMBER_SERVICE_ID}, nameLength=14, columnCount=9">MEMBER_SERVICE</a>
        </td>
        <td class="typecell">TABLE</td>
        <td class="relcell"><a href="#member" title="FK_MEMBER_SERVICE_MEMBER">MEMBER</a>, <a href="#service_rank"
            title="FK_MEMBER_SERVICE_SERVICE_RANK_CODE">SERVICE_RANK</a></td>
        <td class="relcell">&nbsp;</td>
        <td class="commentcell MEMBER_SERVICE_comment">
          <pre>会員のサービス情報（ポイントサービスなど）。
テストケースのために、あえて統一性を崩してユニーク制約経由の one-to-one を表現している。</pre>
        </td>
        <td class="subcell">MemberService</td>
      </tr>
      <tr>
        <td class="rownumcell">7</td>
        <td class="aliascell">会員ステータス</td>
        <td class="namecell" data-name="MEMBER_STATUS"><a href="#member_status"
            title="type=TABLE, primaryKey={MEMBER_STATUS_CODE}, nameLength=13, columnCount=4">MEMBER_STATUS</a>
        </td>
        <td class="typecell">TABLE</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"><a href="#member" title="FK_MEMBER_MEMBER_STATUS">MEMBER</a>, <a href="#member_login"
            title="FK_MEMBER_LOGIN_MEMBER_STATUS">MEMBER_LOGIN</a></td>
        <td class="commentcell MEMBER_STATUS_comment">
          <pre>会員のステータスを示す固定的なマスタテーブル。いわゆるテーブル区分値！
業務運用上で増えることはなく、増減するときはプログラム修正ともなうレベルの業務変更と考えられる。

こういった固定的なマスタテーブルには、更新日時などの共通カラムは定義していないが、業務上そういった情報を管理する必要性が低いという理由に加え、ExampleDBとして共通カラムでER図が埋め尽くされてしまい見づらくなるというところで割り切っている。実業務では統一的に定義することもある。</pre>
        </td>
        <td class="subcell">MemberStatus</td>
      </tr>
      <tr>
        <td class="rownumcell">8</td>
        <td class="aliascell">会員退会情報</td>
        <td class="namecell" data-name="MEMBER_WITHDRAWAL"><a href="#member_withdrawal"
            title="type=TABLE, primaryKey={MEMBER_ID}, nameLength=17, columnCount=8">MEMBER_WITHDRAWAL</a>
        </td>
        <td class="typecell">TABLE</td>
        <td class="relcell"><a href="#member" title="FK_MEMBER_WITHDRAWAL_MEMBER">MEMBER</a>, <a
            href="#withdrawal_reason" title="FK_MEMBER_WITHDRAWAL_WITHDRAWAL_REASON">WITHDRAWAL_REASON</a>
        </td>
        <td class="relcell">&nbsp;</td>
        <td class="commentcell MEMBER_WITHDRAWAL_comment">
          <pre>退会会員の退会に関する詳細な情報。
退会会員のみデータが存在し、"1 : 0..1" のパターンの one-to-one である。
共通カラムがあってバージョンNOがないパターン。
基本的に更新は入らないが、重要なデータなので万が一のために更新系の共通カラムも。</pre>
        </td>
        <td class="subcell">MemberWithdrawal</td>
      </tr>
      <tr>
        <td class="rownumcell">9</td>
        <td class="aliascell">商品</td>
        <td class="namecell" data-name="PRODUCT"><a href="#product"
            title="type=TABLE, primaryKey={PRODUCT_ID}, nameLength=7, columnCount=11">PRODUCT</a></td>
        <td class="typecell">TABLE</td>
        <td class="relcell"><a href="#product_category" title="FK_PRODUCT_PRODUCT_CATEGORY">PRODUCT_CATEGORY</a>, <a
            href="#product_status" title="FK_PRODUCT_PRODUCT_STATUS">PRODUCT_STATUS</a></td>
        <td class="relcell"><a href="#purchase" title="FK_PURCHASE_PRODUCT">PURCHASE</a></td>
        <td class="commentcell PRODUCT_comment">
          <pre>&nbsp;</pre>
        </td>
        <td class="subcell">Product</td>
      </tr>
      <tr>
        <td class="rownumcell">10</td>
        <td class="aliascell">商品カテゴリ</td>
        <td class="namecell" data-name="PRODUCT_CATEGORY"><a href="#product_category"
            title="type=TABLE, primaryKey={PRODUCT_CATEGORY_CODE}, nameLength=16, columnCount=3">PRODUCT_CATEGORY</a>
        </td>
        <td class="typecell">TABLE</td>
        <td class="relcell"><a href="#product_category" title="FK_PRODUCT_CATEGORY_PARENT">PRODUCT_CATEGORY</a>
        </td>
        <td class="relcell"><a href="#product" title="FK_PRODUCT_PRODUCT_CATEGORY">PRODUCT</a>, <a
            href="#product_category" title="FK_PRODUCT_CATEGORY_PARENT">PRODUCT_CATEGORY</a></td>
        <td class="commentcell PRODUCT_CATEGORY_comment">
          <pre>商品のカテゴリを表現するマスタ。自己参照FKの階層になっている。</pre>
        </td>
        <td class="subcell">ProductCategory</td>
      </tr>
      <tr>
        <td class="rownumcell">11</td>
        <td class="aliascell">商品ステータス</td>
        <td class="namecell" data-name="PRODUCT_STATUS"><a href="#product_status"
            title="type=TABLE, primaryKey={PRODUCT_STATUS_CODE}, nameLength=14, columnCount=3">PRODUCT_STATUS</a>
        </td>
        <td class="typecell">TABLE</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"><a href="#product" title="FK_PRODUCT_PRODUCT_STATUS">PRODUCT</a></td>
        <td class="commentcell PRODUCT_STATUS_comment">
          <pre>商品のステータスを表現する固定的なマスタ。</pre>
        </td>
        <td class="subcell">ProductStatus</td>
      </tr>
      <tr>
        <td class="rownumcell">12</td>
        <td class="aliascell">購入</td>
        <td class="namecell" data-name="PURCHASE"><a href="#purchase"
            title="type=TABLE, primaryKey={PURCHASE_ID}, nameLength=8, columnCount=12">PURCHASE</a></td>
        <td class="typecell">TABLE</td>
        <td class="relcell"><a href="#member" title="FK_PURCHASE_MEMBER">MEMBER</a>, <a href="#product"
            title="FK_PURCHASE_PRODUCT">PRODUCT</a></td>
        <td class="relcell"><a href="#purchase_payment" title="FK_PURCHASE_PAYMENT_PURCHASE">PURCHASE_PAYMENT</a></td>
        <td class="commentcell PURCHASE_comment">
          <pre>一つの商品に対する購入を表現する(購入履歴とも言える)。
実業務であれば購入詳細というテーブルを作り、「購入という行為」と「その中身（詳細）」を違う粒度のデータとしてそれぞれ管理するのが一般的と言えるでしょう。というか、注文とか請求とかそういうことを考え始めたらもっと複雑になるはずですが、ExampleDBということで割り切っています。</pre>
        </td>
        <td class="subcell">Purchase</td>
      </tr>
      <tr>
        <td class="rownumcell">13</td>
        <td class="aliascell">購入支払</td>
        <td class="namecell" data-name="PURCHASE_PAYMENT"><a href="#purchase_payment"
            title="type=TABLE, primaryKey={PURCHASE_PAYMENT_ID}, nameLength=16, columnCount=9">PURCHASE_PAYMENT</a>
        </td>
        <td class="typecell">TABLE</td>
        <td class="relcell"><a href="#purchase" title="FK_PURCHASE_PAYMENT_PURCHASE">PURCHASE</a></td>
        <td class="relcell">&nbsp;</td>
        <td class="commentcell PURCHASE_PAYMENT_comment">
          <pre>購入に対する支払。
分割払いもできるのでmanyとなり、会員からの孫テーブルのテストができてうれしい。</pre>
        </td>
        <td class="subcell">PurchasePayment</td>
      </tr>
      <tr>
        <td class="rownumcell">14</td>
        <td class="aliascell">地域</td>
        <td class="namecell" data-name="REGION"><a href="#region"
            title="type=TABLE, primaryKey={REGION_ID}, nameLength=6, columnCount=2">REGION</a></td>
        <td class="typecell">TABLE</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"><a href="#member_address" title="FK_MEMBER_ADDRESS_REGION">MEMBER_ADDRESS</a></td>
        <td class="commentcell REGION_comment">
          <pre>主に会員の住所に対応する漠然とした地域。
かなりざっくりした感じではある。唯一の業務的one-to-oneの親テーブルのケース。</pre>
        </td>
        <td class="subcell">Region</td>
      </tr>
      <tr>
        <td class="rownumcell">15</td>
        <td class="aliascell">サービスランク</td>
        <td class="namecell" data-name="SERVICE_RANK"><a href="#service_rank"
            title="type=TABLE, primaryKey={SERVICE_RANK_CODE}, nameLength=12, columnCount=6">SERVICE_RANK</a>
        </td>
        <td class="typecell">TABLE</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"><a href="#member_service" title="FK_MEMBER_SERVICE_SERVICE_RANK_CODE">MEMBER_SERVICE</a>
        </td>
        <td class="commentcell SERVICE_RANK_comment">
          <pre>会員のサービスレベルを表現するランク。(ゴールドとかプラチナとか)</pre>
        </td>
        <td class="subcell">ServiceRank</td>
      </tr>
      <tr>
        <td class="rownumcell">16</td>
        <td class="aliascell">退会理由</td>
        <td class="namecell" data-name="WITHDRAWAL_REASON"><a href="#withdrawal_reason"
            title="type=TABLE, primaryKey={WITHDRAWAL_REASON_CODE}, nameLength=17, columnCount=3">WITHDRAWAL_REASON</a>
        </td>
        <td class="typecell">TABLE</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"><a href="#member_withdrawal"
            title="FK_MEMBER_WITHDRAWAL_WITHDRAWAL_REASON">MEMBER_WITHDRAWAL</a></td>
        <td class="commentcell WITHDRAWAL_REASON_comment">
          <pre>会員に選ばせる定型的な退会理由のマスタ。そういえば、これ表示順カラムがないですねぇ...</pre>
        </td>
        <td class="subcell">WithdrawalReason</td>
      </tr>
    </tbody>
  </table>

  <h2 id="member" title="type=TABLE, primaryKey={MEMBER_ID}, nameLength=6, columnCount=11">
    (会員)MEMBER
    &nbsp;<span class="arrqycount"><a href="#member_arrqy">(arrangeQuery=2)</a></span>
  </h2>
  <div class="tablecomment MEMBER_comment" data-name="MEMBER">
    <pre>会員のプロフィールやアカウントなどの基本情報を保持する。
基本的に物理削除はなく、退会したらステータスが退会会員になる。
ライフサイクルやカテゴリの違う会員情報は、one-to-oneなどの関連テーブルにて。</pre>
  </div>
  <input type="hidden" value="MEMBER">
  <table class="tablecontent">
    <thead>
      <tr>
        <th class="rownumhead">No.</th>
        <th>PK</th>
        <th>ID</th>
        <th>UQ</th>
        <th>IX</th>
        <th>Not<br>Null</th>
        <th>Alias</th>
        <th>Name</th>
        <th>Type</th>
        <th>Size</th>
        <th>ForeignTable</th>
        <th>ReferrerTable</th>
        <th>Classification</th>
        <th>ColumnComment</th>
        <th>PropertyName</th>
        <th>JavaType</th>
      </tr>
    </thead>
    <tbody id="member-body">
      <tr>
        <td class="rownumcell">1</td>
        <td class="flgcell" title="CONSTRAINT_8">o</td>
        <td class="flgcell">o</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell">会員ID</td>
        <td class=" columnnamecell" id="member_member_id">MEMBER_ID</td>
        <td class="typecell">INTEGER</td>
        <td class="sizecell"> 10 </td>
        <td class="relcell"><a href="#member_address" class="additionalfk"
            title="FK_MEMBER_MEMBER_ADDRESS_VALID: fixedCondition=&quot;$$foreignAlias$$.VALID_BEGIN_DATE <= /*$$locationBase$$.parameterMapMemberAddressAsValid.targetDate*/null\n     and $$foreignAlias$$.VALID_END_DATE >= /*$$locationBase$$.parameterMapMemberAddressAsValid.targetDate*/null&quot;, comment=Member's address at the target date.">MEMBER_ADDRESS(AsValid)</a>,<br><a
            href="#member_login" class="additionalfk"
            title="FK_MEMBER_MEMBER_LOGIN_LATEST: fixedCondition=&quot;$$foreignAlias$$.LOGIN_DATETIME = ($$sqbegin$$\nselect max(login.LOGIN_DATETIME)\n  from MEMBER_LOGIN login\n where login.MEMBER_ID = $$foreignAlias$$.MEMBER_ID\n)$$sqend$$&quot;">MEMBER_LOGIN(AsLatest)</a>&nbsp;
        </td>
        <td class="relcell"><a href="#member_address" title="FK_MEMBER_ADDRESS_MEMBER">MEMBER_ADDRESS</a>,<br><a
            href="#member_following" title="FK_MEMBER_FOLLOWING_MY_MEMBER">MEMBER_FOLLOWING</a>,<br><a
            href="#member_following" title="FK_MEMBER_FOLLOWING_YOUR_MEMBER">MEMBER_FOLLOWING</a>,<br><a
            href="#member_login" title="FK_MEMBER_LOGIN_MEMBER">MEMBER_LOGIN</a>,<br><a href="#member_security"
            title="FK_MEMBER_SECURITY_MEMBER">MEMBER_SECURITY</a>,<br><a href="#member_service"
            title="FK_MEMBER_SERVICE_MEMBER">MEMBER_SERVICE</a>,<br><a href="#member_withdrawal"
            title="FK_MEMBER_WITHDRAWAL_MEMBER">MEMBER_WITHDRAWAL</a>,<br><a href="#purchase"
            title="FK_PURCHASE_MEMBER">PURCHASE</a>&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>連番として自動採番される。会員IDだけに限らず採番方法はDBMS次第。</pre>
        </td>
        <td class="subcell">memberId</td>
        <td class="subcell">Integer</td>
      </tr>
      <tr>
        <td class="rownumcell">2</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell" title="IX_MEMBER_MEMBER_NAME(MEMBER_NAME)">o</td>
        <td class="flgcell">*</td>
        <td class="aliascell">会員名称</td>
        <td class=" columnnamecell" id="member_member_name">MEMBER_NAME</td>
        <td class="typecell">VARCHAR</td>
        <td class="sizecell"> 100 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>会員のフルネームの名称。
苗字と名前を分けて管理することが多いが、ここでは単純にひとまとめ。</pre>
        </td>
        <td class="subcell">memberName</td>
        <td class="subcell">String</td>
      </tr>
      <tr>
        <td class="rownumcell">3</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell" title="UQ_MEMBER_MEMBER_ACCOUNT_INDEX_8(MEMBER_ACCOUNT)">o</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell">会員アカウント</td>
        <td class=" columnnamecell" id="member_member_account">MEMBER_ACCOUNT</td>
        <td class="typecell">VARCHAR</td>
        <td class="sizecell"> 50 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>ログインIDとして利用する。
昨今メールアドレスをログインIDとすることが多いので、あまり見かけないかも!?</pre>
        </td>
        <td class="subcell">memberAccount</td>
        <td class="subcell">String</td>
      </tr>
      <tr>
        <td class="rownumcell">4</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell" title="FK_MEMBER_MEMBER_STATUS_INDEX_8(MEMBER_STATUS_CODE)">o</td>
        <td class="flgcell">*</td>
        <td class="aliascell">会員ステータスコード</td>
        <td class=" columnnamecell" id="member_member_status_code">MEMBER_STATUS_CODE</td>
        <td class="typecell">CHAR</td>
        <td class="sizecell"> 3 </td>
        <td class="relcell"><a href="#member_status" title="FK_MEMBER_MEMBER_STATUS">MEMBER_STATUS</a>&nbsp;
        </td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"><a href="#MemberStatusCls">MemberStatus</a></td>
        <td class="commentcell">
          <pre>会員ステータスを参照するコード。
ステータスが変わるたびに、このカラムが更新される。</pre>
        </td>
        <td class="subcell">memberStatusCode</td>
        <td class="subcell">String</td>
      </tr>
      <tr>
        <td class="rownumcell">5</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell" title="IX_MEMBER_FORMALIZED_DATETIME(FORMALIZED_DATETIME)">o</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="aliascell">正式会員日時</td>
        <td class=" columnnamecell" id="member_formalized_datetime">FORMALIZED_DATETIME</td>
        <td class="typecell">TIMESTAMP</td>
        <td class="sizecell"> 26, 6 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>会員が正式に確定した(正式会員になった)日時。
一度確定したらもう二度と更新されないはずだ！</pre>
        </td>
        <td class="subcell">formalizedDatetime</td>
        <td class="subcell">LocalDateTime</td>
      </tr>
      <tr>
        <td class="rownumcell">6</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="aliascell">生年月日</td>
        <td class=" columnnamecell" id="member_birthdate">BIRTHDATE</td>
        <td class="typecell">DATE</td>
        <td class="sizecell"> 10 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>必須項目ではないので、このデータがない会員もいる。</pre>
        </td>
        <td class="subcell">birthdate</td>
        <td class="subcell">LocalDate</td>
      </tr>
      <tr>
        <td class="rownumcell">7</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell comcolcell">登録日時</td>
        <td class="comcolcell columnnamecell" id="member_register_datetime">REGISTER_DATETIME</td>
        <td class="typecell">TIMESTAMP</td>
        <td class="sizecell"> 26, 6 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>レコードが登録された日時。
会員が登録された日時とほぼ等しいが、そういった業務的な役割を兼務させるのはあまり推奨されない。といいつつ、このテーブルには会員登録日時がない...
仕様はどのテーブルでも同じなので、共通カラムの説明はこのテーブルでしか書かない。</pre>
        </td>
        <td class="subcell">registerDatetime</td>
        <td class="subcell">LocalDateTime</td>
      </tr>
      <tr>
        <td class="rownumcell">8</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell comcolcell">登録ユーザ</td>
        <td class="comcolcell columnnamecell" id="member_register_user">REGISTER_USER</td>
        <td class="typecell">VARCHAR</td>
        <td class="sizecell"> 200 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>レコードを登録したユーザ。
会員テーブルであれば当然、会員自身であるはずだが、他のテーブルの場合では管理画面から運用者による登録など考えられるので、しっかり保持しておく。</pre>
        </td>
        <td class="subcell">registerUser</td>
        <td class="subcell">String</td>
      </tr>
      <tr>
        <td class="rownumcell">9</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell comcolcell">更新日時</td>
        <td class="comcolcell columnnamecell" id="member_update_datetime">UPDATE_DATETIME</td>
        <td class="typecell">TIMESTAMP</td>
        <td class="sizecell"> 26, 6 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>レコードが（最後に）更新された日時。
業務的な利用はあまり推奨されないと別項目で説明したが、このカラムはソートの要素としてよく利用される。</pre>
        </td>
        <td class="subcell">updateDatetime</td>
        <td class="subcell">LocalDateTime</td>
      </tr>
      <tr>
        <td class="rownumcell">10</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell comcolcell">更新ユーザ</td>
        <td class="comcolcell columnnamecell" id="member_update_user">UPDATE_USER</td>
        <td class="typecell">VARCHAR</td>
        <td class="sizecell"> 200 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>レコードを更新したユーザ。
システムは誰が何をしたのかちゃんと覚えているのさ。</pre>
        </td>
        <td class="subcell">updateUser</td>
        <td class="subcell">String</td>
      </tr>
      <tr>
        <td class="rownumcell">11</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell optcell">バージョンNO</td>
        <td class="optcell columnnamecell" id="member_version_no">VERSION_NO</td>
        <td class="typecell">BIGINT</td>
        <td class="sizecell"> 19 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>データのバージョンを示すナンバー。
更新回数と等しく、主に排他制御のために利用される。</pre>
        </td>
        <td class="subcell">versionNo</td>
        <td class="subcell">Long</td>
      </tr>
    </tbody>
  </table>

  <h2 id="member_address" title="type=TABLE, primaryKey={MEMBER_ADDRESS_ID}, nameLength=14, columnCount=11">
    (会員住所情報)MEMBER_ADDRESS
  </h2>
  <div class="tablecomment MEMBER_ADDRESS_comment" data-name="MEMBER_ADDRESS">
    <pre>会員の住所に関する情報で、同時に有効期間ごとに履歴管理されている。
会員を基点に考えた場合、構造的には one-to-many だが、業務的な定型条件で one-to-one になる。このような構造を「業務的one-to-one」と呼ぶ！
有効期間は隙間なく埋められるが、ここでは住所情報のない会員も存在し、厳密には(業務的な) "1 : 0..1" である。</pre>
  </div>
  <input type="hidden" value="MEMBER_ADDRESS">
  <table class="tablecontent">
    <thead>
      <tr>
        <th class="rownumhead">No.</th>
        <th>PK</th>
        <th>ID</th>
        <th>UQ</th>
        <th>IX</th>
        <th>Not<br>Null</th>
        <th>Alias</th>
        <th>Name</th>
        <th>Type</th>
        <th>Size</th>
        <th>ForeignTable</th>
        <th>ReferrerTable</th>
        <th>Classification</th>
        <th>ColumnComment</th>
        <th>PropertyName</th>
        <th>JavaType</th>
      </tr>
    </thead>
    <tbody id="member_address-body">
      <tr>
        <td class="rownumcell">1</td>
        <td class="flgcell" title="CONSTRAINT_B">o</td>
        <td class="flgcell">o</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell">会員住所ID</td>
        <td class=" columnnamecell" id="member_address_member_address_id">MEMBER_ADDRESS_ID</td>
        <td class="typecell">INTEGER</td>
        <td class="sizecell"> 10 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>会員住所を識別するID。
期間ごとに同じ会員のデータを保持することがあるため、これは単なるPKであってFKではない。</pre>
        </td>
        <td class="subcell">memberAddressId</td>
        <td class="subcell">Integer</td>
      </tr>
      <tr>
        <td class="rownumcell">2</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell" title="UQ_MEMBER_ADDRESS_INDEX_B(MEMBER_ID, VALID_BEGIN_DATE)">o<span
            class="flgplus">+</span></td>
        <td class="flgcell" title="FK_MEMBER_ADDRESS_MEMBER_INDEX_B(MEMBER_ID)">o</td>
        <td class="flgcell">*</td>
        <td class="aliascell">会員ID</td>
        <td class=" columnnamecell" id="member_address_member_id">MEMBER_ID</td>
        <td class="typecell">INTEGER</td>
        <td class="sizecell"> 10 </td>
        <td class="relcell"><a href="#member" title="FK_MEMBER_ADDRESS_MEMBER">MEMBER</a>&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>会員を参照するID。
期間ごとのデータがあるので、これだけではユニークにはならない。有効開始日と合わせて複合ユニーク制約となるが、厳密には完全な制約にはなっていない。有効期間の概念はRDBでは表現しきれないのである。</pre>
        </td>
        <td class="subcell">memberId</td>
        <td class="subcell">Integer</td>
      </tr>
      <tr>
        <td class="rownumcell">3</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell" title="UQ_MEMBER_ADDRESS_INDEX_B(MEMBER_ID, VALID_BEGIN_DATE)"><span
            class="flgplus">+</span>o</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell">有効開始日</td>
        <td class=" columnnamecell" id="member_address_valid_begin_date">VALID_BEGIN_DATE</td>
        <td class="typecell">DATE</td>
        <td class="sizecell"> 10 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>一つの有効期間の開始を示す日付。
前の有効終了日の次の日の値が格納される。</pre>
        </td>
        <td class="subcell">validBeginDate</td>
        <td class="subcell">LocalDate</td>
      </tr>
      <tr>
        <td class="rownumcell">4</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell">有効終了日</td>
        <td class=" columnnamecell" id="member_address_valid_end_date">VALID_END_DATE</td>
        <td class="typecell">DATE</td>
        <td class="sizecell"> 10 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>有効期間の終了日。
期間の最後の日が格納される。基本的に、次の有効開始日の一日前の値となるが、次の有効期間がない場合は 9999/12/31 となる。</pre>
        </td>
        <td class="subcell">validEndDate</td>
        <td class="subcell">LocalDate</td>
      </tr>
      <tr>
        <td class="rownumcell">5</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell">住所</td>
        <td class=" columnnamecell" id="member_address_address">ADDRESS</td>
        <td class="typecell">VARCHAR</td>
        <td class="sizecell"> 200 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>まるごと住所</pre>
        </td>
        <td class="subcell">address</td>
        <td class="subcell">String</td>
      </tr>
      <tr>
        <td class="rownumcell">6</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell" title="FK_MEMBER_ADDRESS_REGION_INDEX_B(REGION_ID)">o</td>
        <td class="flgcell">*</td>
        <td class="aliascell">地域ID</td>
        <td class=" columnnamecell" id="member_address_region_id">REGION_ID</td>
        <td class="typecell">INTEGER</td>
        <td class="sizecell"> 10 </td>
        <td class="relcell"><a href="#region" title="FK_MEMBER_ADDRESS_REGION">REGION</a>&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"><a href="#RegionCls">Region</a></td>
        <td class="commentcell">
          <pre>地域を参照するID。かなり漠然とした地域。</pre>
        </td>
        <td class="subcell">regionId</td>
        <td class="subcell">Integer</td>
      </tr>
      <tr>
        <td class="rownumcell">7</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell comcolcell"></td>
        <td class="comcolcell columnnamecell" id="member_address_register_datetime">REGISTER_DATETIME</td>
        <td class="typecell">TIMESTAMP</td>
        <td class="sizecell"> 26, 6 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>&nbsp;</pre>
        </td>
        <td class="subcell">registerDatetime</td>
        <td class="subcell">LocalDateTime</td>
      </tr>
      <tr>
        <td class="rownumcell">8</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell comcolcell"></td>
        <td class="comcolcell columnnamecell" id="member_address_register_user">REGISTER_USER</td>
        <td class="typecell">VARCHAR</td>
        <td class="sizecell"> 200 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>&nbsp;</pre>
        </td>
        <td class="subcell">registerUser</td>
        <td class="subcell">String</td>
      </tr>
      <tr>
        <td class="rownumcell">9</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell comcolcell"></td>
        <td class="comcolcell columnnamecell" id="member_address_update_datetime">UPDATE_DATETIME</td>
        <td class="typecell">TIMESTAMP</td>
        <td class="sizecell"> 26, 6 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>&nbsp;</pre>
        </td>
        <td class="subcell">updateDatetime</td>
        <td class="subcell">LocalDateTime</td>
      </tr>
      <tr>
        <td class="rownumcell">10</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell comcolcell"></td>
        <td class="comcolcell columnnamecell" id="member_address_update_user">UPDATE_USER</td>
        <td class="typecell">VARCHAR</td>
        <td class="sizecell"> 200 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>&nbsp;</pre>
        </td>
        <td class="subcell">updateUser</td>
        <td class="subcell">String</td>
      </tr>
      <tr>
        <td class="rownumcell">11</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell optcell"></td>
        <td class="optcell columnnamecell" id="member_address_version_no">VERSION_NO</td>
        <td class="typecell">BIGINT</td>
        <td class="sizecell"> 19 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>&nbsp;</pre>
        </td>
        <td class="subcell">versionNo</td>
        <td class="subcell">Long</td>
      </tr>
    </tbody>
  </table>

  <h2 id="member_following" title="type=TABLE, primaryKey={MEMBER_FOLLOWING_ID}, nameLength=16, columnCount=4">
    (会員フォローイング)MEMBER_FOLLOWING
  </h2>
  <div class="tablecomment MEMBER_FOLLOWING_comment" data-name="MEMBER_FOLLOWING">
    <pre>とある会員が他の会員をフォローできる。すると、フォローした会員の購入履歴が閲覧できる。</pre>
  </div>
  <input type="hidden" value="MEMBER_FOLLOWING">
  <table class="tablecontent">
    <thead>
      <tr>
        <th class="rownumhead">No.</th>
        <th>PK</th>
        <th>ID</th>
        <th>UQ</th>
        <th>IX</th>
        <th>Not<br>Null</th>
        <th>Alias</th>
        <th>Name</th>
        <th>Type</th>
        <th>Size</th>
        <th>ForeignTable</th>
        <th>ReferrerTable</th>
        <th>Classification</th>
        <th>ColumnComment</th>
        <th>PropertyName</th>
        <th>JavaType</th>
      </tr>
    </thead>
    <tbody id="member_following-body">
      <tr>
        <td class="rownumcell">1</td>
        <td class="flgcell" title="CONSTRAINT_BD">o</td>
        <td class="flgcell">o</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell">会員フォローイングID</td>
        <td class=" columnnamecell" id="member_following_member_following_id">MEMBER_FOLLOWING_ID</td>
        <td class="typecell">BIGINT</td>
        <td class="sizecell"> 19 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>連番</pre>
        </td>
        <td class="subcell">memberFollowingId</td>
        <td class="subcell">Long</td>
      </tr>
      <tr>
        <td class="rownumcell">2</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell" title="UQ_MEMBER_FOLLOWING_INDEX_B(MY_MEMBER_ID, YOUR_MEMBER_ID)">o<span
            class="flgplus">+</span></td>
        <td class="flgcell"
          title="FK_MEMBER_FOLLOWING_MY_MEMBER_INDEX_B(MY_MEMBER_ID), IX_MEMBER_FOLLOWING_UNIQUE_REVERSE(YOUR_MEMBER_ID, MY_MEMBER_ID)">
          o<span class="flgplus">+</span></td>
        <td class="flgcell">*</td>
        <td class="aliascell">わたし</td>
        <td class=" columnnamecell" id="member_following_my_member_id">MY_MEMBER_ID</td>
        <td class="typecell">INTEGER</td>
        <td class="sizecell"> 10 </td>
        <td class="relcell"><a href="#member" title="FK_MEMBER_FOLLOWING_MY_MEMBER">MEMBER</a>&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>気になった人がいて...勇気を振り絞った会員のID。</pre>
        </td>
        <td class="subcell">myMemberId</td>
        <td class="subcell">Integer</td>
      </tr>
      <tr>
        <td class="rownumcell">3</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell" title="UQ_MEMBER_FOLLOWING_INDEX_B(MY_MEMBER_ID, YOUR_MEMBER_ID)"><span
            class="flgplus">+</span>o</td>
        <td class="flgcell"
          title="FK_MEMBER_FOLLOWING_YOUR_MEMBER_INDEX_B(YOUR_MEMBER_ID), IX_MEMBER_FOLLOWING_UNIQUE_REVERSE(YOUR_MEMBER_ID, MY_MEMBER_ID)">
          o<span class="flgplus">+</span></td>
        <td class="flgcell">*</td>
        <td class="aliascell">あなた</td>
        <td class=" columnnamecell" id="member_following_your_member_id">YOUR_MEMBER_ID</td>
        <td class="typecell">INTEGER</td>
        <td class="sizecell"> 10 </td>
        <td class="relcell"><a href="#member" title="FK_MEMBER_FOLLOWING_YOUR_MEMBER">MEMBER</a>&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>いきなりのアクションに...ちょっと心揺らいだ会員のID。</pre>
        </td>
        <td class="subcell">yourMemberId</td>
        <td class="subcell">Integer</td>
      </tr>
      <tr>
        <td class="rownumcell">4</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell" title="IX_MEMBER_FOLLOWING_FOLLOW_DATETIME(FOLLOW_DATETIME)">o</td>
        <td class="flgcell">*</td>
        <td class="aliascell">その瞬間</td>
        <td class=" columnnamecell" id="member_following_follow_datetime">FOLLOW_DATETIME</td>
        <td class="typecell">TIMESTAMP</td>
        <td class="sizecell"> 26, 6 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>ふりかえるとちょっと恥ずかしい気持ちになる日時</pre>
        </td>
        <td class="subcell">followDatetime</td>
        <td class="subcell">LocalDateTime</td>
      </tr>
    </tbody>
  </table>

  <h2 id="member_login" title="type=TABLE, primaryKey={MEMBER_LOGIN_ID}, nameLength=12, columnCount=5">
    (会員ログイン)MEMBER_LOGIN
  </h2>
  <div class="tablecomment MEMBER_LOGIN_comment" data-name="MEMBER_LOGIN">
    <pre>ログインするたびに登録されるログイン履歴。
登録されたら更新されるも削除されることもない。さらには、登録する人もプログラムもはっきりしているので、(紙面の都合上もあって)ここでは共通カラムは省略している。</pre>
  </div>
  <input type="hidden" value="MEMBER_LOGIN">
  <table class="tablecontent">
    <thead>
      <tr>
        <th class="rownumhead">No.</th>
        <th>PK</th>
        <th>ID</th>
        <th>UQ</th>
        <th>IX</th>
        <th>Not<br>Null</th>
        <th>Alias</th>
        <th>Name</th>
        <th>Type</th>
        <th>Size</th>
        <th>ForeignTable</th>
        <th>ReferrerTable</th>
        <th>Classification</th>
        <th>ColumnComment</th>
        <th>PropertyName</th>
        <th>JavaType</th>
      </tr>
    </thead>
    <tbody id="member_login-body">
      <tr>
        <td class="rownumcell">1</td>
        <td class="flgcell" title="CONSTRAINT_BDA">o</td>
        <td class="flgcell">o</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell">会員ログインID</td>
        <td class=" columnnamecell" id="member_login_member_login_id">MEMBER_LOGIN_ID</td>
        <td class="typecell">BIGINT</td>
        <td class="sizecell"> 19 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>&nbsp;</pre>
        </td>
        <td class="subcell">memberLoginId</td>
        <td class="subcell">Long</td>
      </tr>
      <tr>
        <td class="rownumcell">2</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell" title="UQ_MEMBER_LOGIN_INDEX_B(MEMBER_ID, LOGIN_DATETIME)">o<span class="flgplus">+</span>
        </td>
        <td class="flgcell" title="FK_MEMBER_LOGIN_MEMBER_INDEX_B(MEMBER_ID)">o</td>
        <td class="flgcell">*</td>
        <td class="aliascell">会員ID</td>
        <td class=" columnnamecell" id="member_login_member_id">MEMBER_ID</td>
        <td class="typecell">INTEGER</td>
        <td class="sizecell"> 10 </td>
        <td class="relcell"><a href="#member" title="FK_MEMBER_LOGIN_MEMBER">MEMBER</a>&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>&nbsp;</pre>
        </td>
        <td class="subcell">memberId</td>
        <td class="subcell">Integer</td>
      </tr>
      <tr>
        <td class="rownumcell">3</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell" title="UQ_MEMBER_LOGIN_INDEX_B(MEMBER_ID, LOGIN_DATETIME)"><span class="flgplus">+</span>o
        </td>
        <td class="flgcell" title="IX_MEMBER_LOGIN_DATETIME(LOGIN_DATETIME)">o</td>
        <td class="flgcell">*</td>
        <td class="aliascell">ログイン日時</td>
        <td class=" columnnamecell" id="member_login_login_datetime">LOGIN_DATETIME</td>
        <td class="typecell">TIMESTAMP</td>
        <td class="sizecell"> 26, 6 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>ログインした瞬間の日時。
同じ会員が同じ日時にログインはできない。(ユニーク制約で重複ログインできないようにしてある)</pre>
        </td>
        <td class="subcell">loginDatetime</td>
        <td class="subcell">LocalDateTime</td>
      </tr>
      <tr>
        <td class="rownumcell">4</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell">モバイルログインフラグ</td>
        <td class=" columnnamecell" id="member_login_mobile_login_flg">MOBILE_LOGIN_FLG</td>
        <td class="typecell">INTEGER</td>
        <td class="sizecell"> 10 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"><a href="#FlgCls">Flg</a></td>
        <td class="commentcell">
          <pre>モバイル機器からのログインか否か。</pre>
        </td>
        <td class="subcell">mobileLoginFlg</td>
        <td class="subcell">Integer</td>
      </tr>
      <tr>
        <td class="rownumcell">5</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell" title="FK_MEMBER_LOGIN_MEMBER_STATUS_INDEX_B(LOGIN_MEMBER_STATUS_CODE)">o</td>
        <td class="flgcell">*</td>
        <td class="aliascell">ログイン時会員ステータスコード</td>
        <td class=" columnnamecell" id="member_login_login_member_status_code">LOGIN_MEMBER_STATUS_CODE</td>
        <td class="typecell">CHAR</td>
        <td class="sizecell"> 3 </td>
        <td class="relcell"><a href="#member_status" title="FK_MEMBER_LOGIN_MEMBER_STATUS">MEMBER_STATUS</a>&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"><a href="#MemberStatusCls">MemberStatus</a></td>
        <td class="commentcell">
          <pre>ログイン時の会員ステータス</pre>
        </td>
        <td class="subcell">loginMemberStatusCode</td>
        <td class="subcell">String</td>
      </tr>
    </tbody>
  </table>

  <h2 id="member_security" title="type=TABLE, primaryKey={MEMBER_ID}, nameLength=15, columnCount=10">
    (会員セキュリティ情報)MEMBER_SECURITY
  </h2>
  <div class="tablecomment MEMBER_SECURITY_comment" data-name="MEMBER_SECURITY">
    <pre>会員とは one-to-one で、会員一人につき必ず一つのセキュリティ情報がある</pre>
  </div>
  <input type="hidden" value="MEMBER_SECURITY">
  <table class="tablecontent">
    <thead>
      <tr>
        <th class="rownumhead">No.</th>
        <th>PK</th>
        <th>ID</th>
        <th>UQ</th>
        <th>IX</th>
        <th>Not<br>Null</th>
        <th>Alias</th>
        <th>Name</th>
        <th>Type</th>
        <th>Size</th>
        <th>ForeignTable</th>
        <th>ReferrerTable</th>
        <th>Classification</th>
        <th>ColumnComment</th>
        <th>PropertyName</th>
        <th>JavaType</th>
      </tr>
    </thead>
    <tbody id="member_security-body">
      <tr>
        <td class="rownumcell">1</td>
        <td class="flgcell" title="CONSTRAINT_6">o</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell">会員ID</td>
        <td class=" columnnamecell" id="member_security_member_id">MEMBER_ID</td>
        <td class="typecell">INTEGER</td>
        <td class="sizecell"> 10 </td>
        <td class="relcell"><a href="#member" title="FK_MEMBER_SECURITY_MEMBER">MEMBER</a>&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>そのまま one-to-one を構成するためのFKとなる。</pre>
        </td>
        <td class="subcell">memberId</td>
        <td class="subcell">Integer</td>
      </tr>
      <tr>
        <td class="rownumcell">2</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell">ログインパスワード</td>
        <td class=" columnnamecell" id="member_security_login_password">LOGIN_PASSWORD</td>
        <td class="typecell">VARCHAR</td>
        <td class="sizecell"> 100 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>ログイン時に利用するパスワード。
本当は良くないが、Exampleなのでひとまず暗号化していない。</pre>
        </td>
        <td class="subcell">loginPassword</td>
        <td class="subcell">String</td>
      </tr>
      <tr>
        <td class="rownumcell">3</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell">リマインダ質問</td>
        <td class=" columnnamecell" id="member_security_reminder_question">REMINDER_QUESTION</td>
        <td class="typecell">VARCHAR</td>
        <td class="sizecell"> 50 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>パスワードを忘れた際のリマインダ機能における質問の内容。</pre>
        </td>
        <td class="subcell">reminderQuestion</td>
        <td class="subcell">String</td>
      </tr>
      <tr>
        <td class="rownumcell">4</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell">リマインダ回答</td>
        <td class=" columnnamecell" id="member_security_reminder_answer">REMINDER_ANSWER</td>
        <td class="typecell">VARCHAR</td>
        <td class="sizecell"> 50 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>パスワードを忘れた際のリマインダ機能における質問の答え。</pre>
        </td>
        <td class="subcell">reminderAnswer</td>
        <td class="subcell">String</td>
      </tr>
      <tr>
        <td class="rownumcell">5</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell">リマインダ利用回数</td>
        <td class=" columnnamecell" id="member_security_reminder_use_count">REMINDER_USE_COUNT</td>
        <td class="typecell">INTEGER</td>
        <td class="sizecell"> 10 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>リマインダを利用した回数。
これが多いと忘れっぽい会員と言えるが、そんなことを知ってもしょうがない。</pre>
        </td>
        <td class="subcell">reminderUseCount</td>
        <td class="subcell">Integer</td>
      </tr>
      <tr>
        <td class="rownumcell">6</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell comcolcell"></td>
        <td class="comcolcell columnnamecell" id="member_security_register_datetime">REGISTER_DATETIME</td>
        <td class="typecell">TIMESTAMP</td>
        <td class="sizecell"> 26, 6 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>&nbsp;</pre>
        </td>
        <td class="subcell">registerDatetime</td>
        <td class="subcell">LocalDateTime</td>
      </tr>
      <tr>
        <td class="rownumcell">7</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell comcolcell"></td>
        <td class="comcolcell columnnamecell" id="member_security_register_user">REGISTER_USER</td>
        <td class="typecell">VARCHAR</td>
        <td class="sizecell"> 200 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>&nbsp;</pre>
        </td>
        <td class="subcell">registerUser</td>
        <td class="subcell">String</td>
      </tr>
      <tr>
        <td class="rownumcell">8</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell comcolcell"></td>
        <td class="comcolcell columnnamecell" id="member_security_update_datetime">UPDATE_DATETIME</td>
        <td class="typecell">TIMESTAMP</td>
        <td class="sizecell"> 26, 6 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>&nbsp;</pre>
        </td>
        <td class="subcell">updateDatetime</td>
        <td class="subcell">LocalDateTime</td>
      </tr>
      <tr>
        <td class="rownumcell">9</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell comcolcell"></td>
        <td class="comcolcell columnnamecell" id="member_security_update_user">UPDATE_USER</td>
        <td class="typecell">VARCHAR</td>
        <td class="sizecell"> 200 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>&nbsp;</pre>
        </td>
        <td class="subcell">updateUser</td>
        <td class="subcell">String</td>
      </tr>
      <tr>
        <td class="rownumcell">10</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell optcell"></td>
        <td class="optcell columnnamecell" id="member_security_version_no">VERSION_NO</td>
        <td class="typecell">BIGINT</td>
        <td class="sizecell"> 19 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>&nbsp;</pre>
        </td>
        <td class="subcell">versionNo</td>
        <td class="subcell">Long</td>
      </tr>
    </tbody>
  </table>

  <h2 id="member_service" title="type=TABLE, primaryKey={MEMBER_SERVICE_ID}, nameLength=14, columnCount=9">
    (会員サービス)MEMBER_SERVICE
  </h2>
  <div class="tablecomment MEMBER_SERVICE_comment" data-name="MEMBER_SERVICE">
    <pre>会員のサービス情報（ポイントサービスなど）。
テストケースのために、あえて統一性を崩してユニーク制約経由の one-to-one を表現している。</pre>
  </div>
  <input type="hidden" value="MEMBER_SERVICE">
  <table class="tablecontent">
    <thead>
      <tr>
        <th class="rownumhead">No.</th>
        <th>PK</th>
        <th>ID</th>
        <th>UQ</th>
        <th>IX</th>
        <th>Not<br>Null</th>
        <th>Alias</th>
        <th>Name</th>
        <th>Type</th>
        <th>Size</th>
        <th>ForeignTable</th>
        <th>ReferrerTable</th>
        <th>Classification</th>
        <th>ColumnComment</th>
        <th>PropertyName</th>
        <th>JavaType</th>
      </tr>
    </thead>
    <tbody id="member_service-body">
      <tr>
        <td class="rownumcell">1</td>
        <td class="flgcell" title="CONSTRAINT_6F">o</td>
        <td class="flgcell">o</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell">会員サービスID</td>
        <td class=" columnnamecell" id="member_service_member_service_id">MEMBER_SERVICE_ID</td>
        <td class="typecell">INTEGER</td>
        <td class="sizecell"> 10 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>独立した主キーとなるが、実質的に会員IDとは one-to-one である。</pre>
        </td>
        <td class="subcell">memberServiceId</td>
        <td class="subcell">Integer</td>
      </tr>
      <tr>
        <td class="rownumcell">2</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell" title="UQ_MEMBER_SERVICE_INDEX_6(MEMBER_ID)">o</td>
        <td class="flgcell" title="FK_MEMBER_SERVICE_MEMBER_INDEX_6(MEMBER_ID)">o</td>
        <td class="flgcell">*</td>
        <td class="aliascell">会員ID</td>
        <td class=" columnnamecell" id="member_service_member_id">MEMBER_ID</td>
        <td class="typecell">INTEGER</td>
        <td class="sizecell"> 10 </td>
        <td class="relcell"><a href="#member" title="FK_MEMBER_SERVICE_MEMBER">MEMBER</a>&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>会員を参照するID。ユニークなので、会員とは one-to-one の関係に。</pre>
        </td>
        <td class="subcell">memberId</td>
        <td class="subcell">Integer</td>
      </tr>
      <tr>
        <td class="rownumcell">3</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell" title="IX_MEMBER_SERVICE_POINT_COUNT(SERVICE_POINT_COUNT)">o</td>
        <td class="flgcell">*</td>
        <td class="aliascell">サービスポイント数</td>
        <td class=" columnnamecell" id="member_service_service_point_count">SERVICE_POINT_COUNT</td>
        <td class="typecell">INTEGER</td>
        <td class="sizecell"> 10 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>購入したら増えて使ったら減る。</pre>
        </td>
        <td class="subcell">servicePointCount</td>
        <td class="subcell">Integer</td>
      </tr>
      <tr>
        <td class="rownumcell">4</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell" title="FK_MEMBER_SERVICE_SERVICE_RANK_CODE_INDEX_6(SERVICE_RANK_CODE)">o</td>
        <td class="flgcell">*</td>
        <td class="aliascell">サービスランクコード</td>
        <td class=" columnnamecell" id="member_service_service_rank_code">SERVICE_RANK_CODE</td>
        <td class="typecell">CHAR</td>
        <td class="sizecell"> 3 </td>
        <td class="relcell"><a href="#service_rank" title="FK_MEMBER_SERVICE_SERVICE_RANK_CODE">SERVICE_RANK</a>&nbsp;
        </td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"><a href="#ServiceRankCls">ServiceRank</a></td>
        <td class="commentcell">
          <pre>どんなランクがあるのかドキドキですね。</pre>
        </td>
        <td class="subcell">serviceRankCode</td>
        <td class="subcell">String</td>
      </tr>
      <tr>
        <td class="rownumcell">5</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell comcolcell"></td>
        <td class="comcolcell columnnamecell" id="member_service_register_datetime">REGISTER_DATETIME</td>
        <td class="typecell">TIMESTAMP</td>
        <td class="sizecell"> 26, 6 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>&nbsp;</pre>
        </td>
        <td class="subcell">registerDatetime</td>
        <td class="subcell">LocalDateTime</td>
      </tr>
      <tr>
        <td class="rownumcell">6</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell comcolcell"></td>
        <td class="comcolcell columnnamecell" id="member_service_register_user">REGISTER_USER</td>
        <td class="typecell">VARCHAR</td>
        <td class="sizecell"> 200 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>&nbsp;</pre>
        </td>
        <td class="subcell">registerUser</td>
        <td class="subcell">String</td>
      </tr>
      <tr>
        <td class="rownumcell">7</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell comcolcell"></td>
        <td class="comcolcell columnnamecell" id="member_service_update_datetime">UPDATE_DATETIME</td>
        <td class="typecell">TIMESTAMP</td>
        <td class="sizecell"> 26, 6 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>&nbsp;</pre>
        </td>
        <td class="subcell">updateDatetime</td>
        <td class="subcell">LocalDateTime</td>
      </tr>
      <tr>
        <td class="rownumcell">8</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell comcolcell"></td>
        <td class="comcolcell columnnamecell" id="member_service_update_user">UPDATE_USER</td>
        <td class="typecell">VARCHAR</td>
        <td class="sizecell"> 200 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>&nbsp;</pre>
        </td>
        <td class="subcell">updateUser</td>
        <td class="subcell">String</td>
      </tr>
      <tr>
        <td class="rownumcell">9</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell optcell"></td>
        <td class="optcell columnnamecell" id="member_service_version_no">VERSION_NO</td>
        <td class="typecell">BIGINT</td>
        <td class="sizecell"> 19 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>&nbsp;</pre>
        </td>
        <td class="subcell">versionNo</td>
        <td class="subcell">Long</td>
      </tr>
    </tbody>
  </table>

  <h2 id="member_status" title="type=TABLE, primaryKey={MEMBER_STATUS_CODE}, nameLength=13, columnCount=4">
    (会員ステータス)MEMBER_STATUS
  </h2>
  <div class="tablecomment MEMBER_STATUS_comment" data-name="MEMBER_STATUS">
    <pre>会員のステータスを示す固定的なマスタテーブル。いわゆるテーブル区分値！
業務運用上で増えることはなく、増減するときはプログラム修正ともなうレベルの業務変更と考えられる。

こういった固定的なマスタテーブルには、更新日時などの共通カラムは定義していないが、業務上そういった情報を管理する必要性が低いという理由に加え、ExampleDBとして共通カラムでER図が埋め尽くされてしまい見づらくなるというところで割り切っている。実業務では統一的に定義することもある。</pre>
  </div>
  <input type="hidden" value="MEMBER_STATUS">
  <table class="tablecontent">
    <thead>
      <tr>
        <th class="rownumhead">No.</th>
        <th>PK</th>
        <th>ID</th>
        <th>UQ</th>
        <th>IX</th>
        <th>Not<br>Null</th>
        <th>Alias</th>
        <th>Name</th>
        <th>Type</th>
        <th>Size</th>
        <th>ForeignTable</th>
        <th>ReferrerTable</th>
        <th>Classification</th>
        <th>ColumnComment</th>
        <th>PropertyName</th>
        <th>JavaType</th>
      </tr>
    </thead>
    <tbody id="member_status-body">
      <tr>
        <td class="rownumcell">1</td>
        <td class="flgcell" title="CONSTRAINT_4">o</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell">会員ステータスコード</td>
        <td class=" columnnamecell" id="member_status_member_status_code">MEMBER_STATUS_CODE</td>
        <td class="typecell">CHAR</td>
        <td class="sizecell"> 3 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell"><a href="#member" title="FK_MEMBER_MEMBER_STATUS">MEMBER</a>,<br><a href="#member_login"
            title="FK_MEMBER_LOGIN_MEMBER_STATUS">MEMBER_LOGIN</a>&nbsp;</td>
        <td class="relcell"><a href="#MemberStatusCls">MemberStatus</a></td>
        <td class="commentcell">
          <pre>会員ステータスを識別するコード。
固定的なデータなので連番とか番号にはせず、データを直接見たときも人が直感的にわかるように、例えば "FML" とかの３桁のコード形式にしている。(3って何会員だっけ？とかの問答をやりたくないので)</pre>
        </td>
        <td class="subcell">memberStatusCode</td>
        <td class="subcell">String</td>
      </tr>
      <tr>
        <td class="rownumcell">2</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell">会員ステータス名称</td>
        <td class=" columnnamecell" id="member_status_member_status_name">MEMBER_STATUS_NAME</td>
        <td class="typecell">VARCHAR</td>
        <td class="sizecell"> 50 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>表示用の名称。
国際化対応するときはもっと色々考える必要があるかと...ということで英語名カラムがないので、そのまま区分値メソッド名の一部としても利用される。</pre>
        </td>
        <td class="subcell">memberStatusName</td>
        <td class="subcell">String</td>
      </tr>
      <tr>
        <td class="rownumcell">3</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell">説明</td>
        <td class=" columnnamecell" id="member_status_description">DESCRIPTION</td>
        <td class="typecell">VARCHAR</td>
        <td class="sizecell"> 200 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>会員ステータスそれぞれの説明。
区分値の一つ一つの要素に気の利いた説明があるとディベロッパーがとても助かるので絶対に欲しい。</pre>
        </td>
        <td class="subcell">description</td>
        <td class="subcell">String</td>
      </tr>
      <tr>
        <td class="rownumcell">4</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell" title="UQ_MEMBER_STATUS_DISPLAY_ORDER_INDEX_4(DISPLAY_ORDER)">o</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell">表示順</td>
        <td class=" columnnamecell" id="member_status_display_order">DISPLAY_ORDER</td>
        <td class="typecell">INTEGER</td>
        <td class="sizecell"> 10 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>UI上のステータスの表示順を示すNO。
並べるときは、このカラムに対して昇順のソート条件にする。</pre>
        </td>
        <td class="subcell">displayOrder</td>
        <td class="subcell">Integer</td>
      </tr>
    </tbody>
  </table>

  <h2 id="member_withdrawal" title="type=TABLE, primaryKey={MEMBER_ID}, nameLength=17, columnCount=8">
    (会員退会情報)MEMBER_WITHDRAWAL
  </h2>
  <div class="tablecomment MEMBER_WITHDRAWAL_comment" data-name="MEMBER_WITHDRAWAL">
    <pre>退会会員の退会に関する詳細な情報。
退会会員のみデータが存在し、"1 : 0..1" のパターンの one-to-one である。
共通カラムがあってバージョンNOがないパターン。
基本的に更新は入らないが、重要なデータなので万が一のために更新系の共通カラムも。</pre>
  </div>
  <input type="hidden" value="MEMBER_WITHDRAWAL">
  <table class="tablecontent">
    <thead>
      <tr>
        <th class="rownumhead">No.</th>
        <th>PK</th>
        <th>ID</th>
        <th>UQ</th>
        <th>IX</th>
        <th>Not<br>Null</th>
        <th>Alias</th>
        <th>Name</th>
        <th>Type</th>
        <th>Size</th>
        <th>ForeignTable</th>
        <th>ReferrerTable</th>
        <th>Classification</th>
        <th>ColumnComment</th>
        <th>PropertyName</th>
        <th>JavaType</th>
      </tr>
    </thead>
    <tbody id="member_withdrawal-body">
      <tr>
        <td class="rownumcell">1</td>
        <td class="flgcell" title="CONSTRAINT_E">o</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell"></td>
        <td class=" columnnamecell" id="member_withdrawal_member_id">MEMBER_ID</td>
        <td class="typecell">INTEGER</td>
        <td class="sizecell"> 10 </td>
        <td class="relcell"><a href="#member" title="FK_MEMBER_WITHDRAWAL_MEMBER">MEMBER</a>&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>&nbsp;</pre>
        </td>
        <td class="subcell">memberId</td>
        <td class="subcell">Integer</td>
      </tr>
      <tr>
        <td class="rownumcell">2</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell" title="FK_MEMBER_WITHDRAWAL_WITHDRAWAL_REASON_INDEX_E(WITHDRAWAL_REASON_CODE)">o
        </td>
        <td class="flgcell"> &nbsp;</td>
        <td class="aliascell">退会理由コード</td>
        <td class=" columnnamecell" id="member_withdrawal_withdrawal_reason_code">WITHDRAWAL_REASON_CODE</td>
        <td class="typecell">CHAR</td>
        <td class="sizecell"> 3 </td>
        <td class="relcell"><a href="#withdrawal_reason"
            title="FK_MEMBER_WITHDRAWAL_WITHDRAWAL_REASON">WITHDRAWAL_REASON</a>&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"><a href="#WithdrawalReasonCls">WithdrawalReason</a></td>
        <td class="commentcell">
          <pre>定型的な退会した理由を参照するコード。
何も言わずに退会する会員もいるので必須項目ではない。</pre>
        </td>
        <td class="subcell">withdrawalReasonCode</td>
        <td class="subcell">String</td>
      </tr>
      <tr>
        <td class="rownumcell">3</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="aliascell">退会理由入力テキスト</td>
        <td class=" columnnamecell" id="member_withdrawal_withdrawal_reason_input_text">
          WITHDRAWAL_REASON_INPUT_TEXT</td>
        <td class="typecell">CLOB</td>
        <td class="sizecell"> 2147483647 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>会員がフリーテキストで入力できる退会理由。
もう言いたいこと言ってもらう感じ。サイト運営側としてはこういうのは真摯に受け止めて改善していきたいところ。</pre>
        </td>
        <td class="subcell">withdrawalReasonInputText</td>
        <td class="subcell">String</td>
      </tr>
      <tr>
        <td class="rownumcell">4</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell">退会日時</td>
        <td class=" columnnamecell" id="member_withdrawal_withdrawal_datetime">WITHDRAWAL_DATETIME</td>
        <td class="typecell">TIMESTAMP</td>
        <td class="sizecell"> 26, 6 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>退会した瞬間の日時。
正式会員日時と違い、こっちは one-to-one の別テーブルで管理されている。</pre>
        </td>
        <td class="subcell">withdrawalDatetime</td>
        <td class="subcell">LocalDateTime</td>
      </tr>
      <tr>
        <td class="rownumcell">5</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell comcolcell"></td>
        <td class="comcolcell columnnamecell" id="member_withdrawal_register_datetime">REGISTER_DATETIME</td>
        <td class="typecell">TIMESTAMP</td>
        <td class="sizecell"> 26, 6 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>&nbsp;</pre>
        </td>
        <td class="subcell">registerDatetime</td>
        <td class="subcell">LocalDateTime</td>
      </tr>
      <tr>
        <td class="rownumcell">6</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell comcolcell"></td>
        <td class="comcolcell columnnamecell" id="member_withdrawal_register_user">REGISTER_USER</td>
        <td class="typecell">VARCHAR</td>
        <td class="sizecell"> 200 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>&nbsp;</pre>
        </td>
        <td class="subcell">registerUser</td>
        <td class="subcell">String</td>
      </tr>
      <tr>
        <td class="rownumcell">7</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell comcolcell"></td>
        <td class="comcolcell columnnamecell" id="member_withdrawal_update_datetime">UPDATE_DATETIME</td>
        <td class="typecell">TIMESTAMP</td>
        <td class="sizecell"> 26, 6 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>&nbsp;</pre>
        </td>
        <td class="subcell">updateDatetime</td>
        <td class="subcell">LocalDateTime</td>
      </tr>
      <tr>
        <td class="rownumcell">8</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell comcolcell"></td>
        <td class="comcolcell columnnamecell" id="member_withdrawal_update_user">UPDATE_USER</td>
        <td class="typecell">VARCHAR</td>
        <td class="sizecell"> 200 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>&nbsp;</pre>
        </td>
        <td class="subcell">updateUser</td>
        <td class="subcell">String</td>
      </tr>
    </tbody>
  </table>

  <h2 id="product" title="type=TABLE, primaryKey={PRODUCT_ID}, nameLength=7, columnCount=11">
    (商品)PRODUCT
  </h2>
  <div class="tablecomment PRODUCT_comment" data-name="PRODUCT">
    <pre></pre>
  </div>
  <input type="hidden" value="PRODUCT">
  <table class="tablecontent">
    <thead>
      <tr>
        <th class="rownumhead">No.</th>
        <th>PK</th>
        <th>ID</th>
        <th>UQ</th>
        <th>IX</th>
        <th>Not<br>Null</th>
        <th>Alias</th>
        <th>Name</th>
        <th>Type</th>
        <th>Size</th>
        <th>ForeignTable</th>
        <th>ReferrerTable</th>
        <th>Classification</th>
        <th>ColumnComment</th>
        <th>PropertyName</th>
        <th>JavaType</th>
      </tr>
    </thead>
    <tbody id="product-body">
      <tr>
        <td class="rownumcell">1</td>
        <td class="flgcell" title="CONSTRAINT_1">o</td>
        <td class="flgcell">o</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell"></td>
        <td class=" columnnamecell" id="product_product_id">PRODUCT_ID</td>
        <td class="typecell">INTEGER</td>
        <td class="sizecell"> 10 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell"><a href="#purchase" title="FK_PURCHASE_PRODUCT">PURCHASE</a>&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>&nbsp;</pre>
        </td>
        <td class="subcell">productId</td>
        <td class="subcell">Integer</td>
      </tr>
      <tr>
        <td class="rownumcell">2</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell" title="IX_PRODUCT_PRODUCT_NAME(PRODUCT_NAME)">o</td>
        <td class="flgcell">*</td>
        <td class="aliascell">商品名称</td>
        <td class=" columnnamecell" id="product_product_name">PRODUCT_NAME</td>
        <td class="typecell">VARCHAR</td>
        <td class="sizecell"> 50 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>ExampleDBとして、コメントの少ないケースを表現するため、あえてコメントを控えている。
実業務ではしっかりとコメントを入れることが強く強く推奨される。「よりによってこのテーブルでやらないでよ！」あわわ、何も聞こえません〜</pre>
        </td>
        <td class="subcell">productName</td>
        <td class="subcell">String</td>
      </tr>
      <tr>
        <td class="rownumcell">3</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell" title="UQ_PRODUCT_PRODUCT_HANDLE_CODE_INDEX_1(PRODUCT_HANDLE_CODE)">o</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell">商品ハンドルコード</td>
        <td class=" columnnamecell" id="product_product_handle_code">PRODUCT_HANDLE_CODE</td>
        <td class="typecell">VARCHAR</td>
        <td class="sizecell"> 100 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>これだけは書いておこう、商品を識別する業務上のコード。よく品番とか言うかもしれませんねぇ...</pre>
        </td>
        <td class="subcell">productHandleCode</td>
        <td class="subcell">String</td>
      </tr>
      <tr>
        <td class="rownumcell">4</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell" title="FK_PRODUCT_PRODUCT_CATEGORY_INDEX_1(PRODUCT_CATEGORY_CODE)">o</td>
        <td class="flgcell">*</td>
        <td class="aliascell"></td>
        <td class=" columnnamecell" id="product_product_category_code">PRODUCT_CATEGORY_CODE</td>
        <td class="typecell">CHAR</td>
        <td class="sizecell"> 3 </td>
        <td class="relcell"><a href="#product_category" title="FK_PRODUCT_PRODUCT_CATEGORY">PRODUCT_CATEGORY</a>&nbsp;
        </td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>&nbsp;</pre>
        </td>
        <td class="subcell">productCategoryCode</td>
        <td class="subcell">String</td>
      </tr>
      <tr>
        <td class="rownumcell">5</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell" title="FK_PRODUCT_PRODUCT_STATUS_INDEX_1(PRODUCT_STATUS_CODE)">o</td>
        <td class="flgcell">*</td>
        <td class="aliascell"></td>
        <td class=" columnnamecell" id="product_product_status_code">PRODUCT_STATUS_CODE</td>
        <td class="typecell">CHAR</td>
        <td class="sizecell"> 3 </td>
        <td class="relcell"><a href="#product_status" title="FK_PRODUCT_PRODUCT_STATUS">PRODUCT_STATUS</a>&nbsp;
        </td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"><a href="#ProductStatusCls">ProductStatus</a></td>
        <td class="commentcell">
          <pre>&nbsp;</pre>
        </td>
        <td class="subcell">productStatusCode</td>
        <td class="subcell">String</td>
      </tr>
      <tr>
        <td class="rownumcell">6</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell">定価</td>
        <td class=" columnnamecell" id="product_regular_price">REGULAR_PRICE</td>
        <td class="typecell">INTEGER</td>
        <td class="sizecell"> 10 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>&nbsp;</pre>
        </td>
        <td class="subcell">regularPrice</td>
        <td class="subcell">Integer</td>
      </tr>
      <tr>
        <td class="rownumcell">7</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell comcolcell"></td>
        <td class="comcolcell columnnamecell" id="product_register_datetime">REGISTER_DATETIME</td>
        <td class="typecell">TIMESTAMP</td>
        <td class="sizecell"> 26, 6 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>&nbsp;</pre>
        </td>
        <td class="subcell">registerDatetime</td>
        <td class="subcell">LocalDateTime</td>
      </tr>
      <tr>
        <td class="rownumcell">8</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell comcolcell"></td>
        <td class="comcolcell columnnamecell" id="product_register_user">REGISTER_USER</td>
        <td class="typecell">VARCHAR</td>
        <td class="sizecell"> 200 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>&nbsp;</pre>
        </td>
        <td class="subcell">registerUser</td>
        <td class="subcell">String</td>
      </tr>
      <tr>
        <td class="rownumcell">9</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell comcolcell"></td>
        <td class="comcolcell columnnamecell" id="product_update_datetime">UPDATE_DATETIME</td>
        <td class="typecell">TIMESTAMP</td>
        <td class="sizecell"> 26, 6 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>&nbsp;</pre>
        </td>
        <td class="subcell">updateDatetime</td>
        <td class="subcell">LocalDateTime</td>
      </tr>
      <tr>
        <td class="rownumcell">10</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell comcolcell"></td>
        <td class="comcolcell columnnamecell" id="product_update_user">UPDATE_USER</td>
        <td class="typecell">VARCHAR</td>
        <td class="sizecell"> 200 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>&nbsp;</pre>
        </td>
        <td class="subcell">updateUser</td>
        <td class="subcell">String</td>
      </tr>
      <tr>
        <td class="rownumcell">11</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell optcell"></td>
        <td class="optcell columnnamecell" id="product_version_no">VERSION_NO</td>
        <td class="typecell">BIGINT</td>
        <td class="sizecell"> 19 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>&nbsp;</pre>
        </td>
        <td class="subcell">versionNo</td>
        <td class="subcell">Long</td>
      </tr>
    </tbody>
  </table>

  <h2 id="product_category" title="type=TABLE, primaryKey={PRODUCT_CATEGORY_CODE}, nameLength=16, columnCount=3">
    (商品カテゴリ)PRODUCT_CATEGORY
  </h2>
  <div class="tablecomment PRODUCT_CATEGORY_comment" data-name="PRODUCT_CATEGORY">
    <pre>商品のカテゴリを表現するマスタ。自己参照FKの階層になっている。</pre>
  </div>
  <input type="hidden" value="PRODUCT_CATEGORY">
  <table class="tablecontent">
    <thead>
      <tr>
        <th class="rownumhead">No.</th>
        <th>PK</th>
        <th>ID</th>
        <th>UQ</th>
        <th>IX</th>
        <th>Not<br>Null</th>
        <th>Alias</th>
        <th>Name</th>
        <th>Type</th>
        <th>Size</th>
        <th>ForeignTable</th>
        <th>ReferrerTable</th>
        <th>Classification</th>
        <th>ColumnComment</th>
        <th>PropertyName</th>
        <th>JavaType</th>
      </tr>
    </thead>
    <tbody id="product_category-body">
      <tr>
        <td class="rownumcell">1</td>
        <td class="flgcell" title="CONSTRAINT_3">o</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell">商品カテゴリコード</td>
        <td class=" columnnamecell" id="product_category_product_category_code">PRODUCT_CATEGORY_CODE</td>
        <td class="typecell">CHAR</td>
        <td class="sizecell"> 3 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell"><a href="#product" title="FK_PRODUCT_PRODUCT_CATEGORY">PRODUCT</a>,<br><a
            href="#product_category" title="FK_PRODUCT_CATEGORY_PARENT">PRODUCT_CATEGORY</a>&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>自分のテーブルの別のレコードからも参照される。</pre>
        </td>
        <td class="subcell">productCategoryCode</td>
        <td class="subcell">String</td>
      </tr>
      <tr>
        <td class="rownumcell">2</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell">商品カテゴリ名称</td>
        <td class=" columnnamecell" id="product_category_product_category_name">PRODUCT_CATEGORY_NAME</td>
        <td class="typecell">VARCHAR</td>
        <td class="sizecell"> 50 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>&nbsp;</pre>
        </td>
        <td class="subcell">productCategoryName</td>
        <td class="subcell">String</td>
      </tr>
      <tr>
        <td class="rownumcell">3</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell" title="FK_PRODUCT_CATEGORY_PARENT_INDEX_3(PARENT_CATEGORY_CODE)">o</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="aliascell">親カテゴリコード</td>
        <td class=" columnnamecell" id="product_category_parent_category_code">PARENT_CATEGORY_CODE</td>
        <td class="typecell">CHAR</td>
        <td class="sizecell"> 3 </td>
        <td class="relcell"><a href="#product_category" title="FK_PRODUCT_CATEGORY_PARENT">PRODUCT_CATEGORY</a>&nbsp;
        </td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>最上位の場合はデータなし。まさひく自己参照FKカラム！</pre>
        </td>
        <td class="subcell">parentCategoryCode</td>
        <td class="subcell">String</td>
      </tr>
    </tbody>
  </table>

  <h2 id="product_status" title="type=TABLE, primaryKey={PRODUCT_STATUS_CODE}, nameLength=14, columnCount=3">
    (商品ステータス)PRODUCT_STATUS
  </h2>
  <div class="tablecomment PRODUCT_STATUS_comment" data-name="PRODUCT_STATUS">
    <pre>商品のステータスを表現する固定的なマスタ。</pre>
  </div>
  <input type="hidden" value="PRODUCT_STATUS">
  <table class="tablecontent">
    <thead>
      <tr>
        <th class="rownumhead">No.</th>
        <th>PK</th>
        <th>ID</th>
        <th>UQ</th>
        <th>IX</th>
        <th>Not<br>Null</th>
        <th>Alias</th>
        <th>Name</th>
        <th>Type</th>
        <th>Size</th>
        <th>ForeignTable</th>
        <th>ReferrerTable</th>
        <th>Classification</th>
        <th>ColumnComment</th>
        <th>PropertyName</th>
        <th>JavaType</th>
      </tr>
    </thead>
    <tbody id="product_status-body">
      <tr>
        <td class="rownumcell">1</td>
        <td class="flgcell" title="CONSTRAINT_1B">o</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell">商品ステータスコード</td>
        <td class=" columnnamecell" id="product_status_product_status_code">PRODUCT_STATUS_CODE</td>
        <td class="typecell">CHAR</td>
        <td class="sizecell"> 3 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell"><a href="#product" title="FK_PRODUCT_PRODUCT_STATUS">PRODUCT</a>&nbsp;</td>
        <td class="relcell"><a href="#ProductStatusCls">ProductStatus</a></td>
        <td class="commentcell">
          <pre>商品ステータスを識別するコード。</pre>
        </td>
        <td class="subcell">productStatusCode</td>
        <td class="subcell">String</td>
      </tr>
      <tr>
        <td class="rownumcell">2</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell">商品ステータス名称</td>
        <td class=" columnnamecell" id="product_status_product_status_name">PRODUCT_STATUS_NAME</td>
        <td class="typecell">VARCHAR</td>
        <td class="sizecell"> 50 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>表示用の名称、英語名カラムがないのでそのままメソッド名の一部としても利用される。</pre>
        </td>
        <td class="subcell">productStatusName</td>
        <td class="subcell">String</td>
      </tr>
      <tr>
        <td class="rownumcell">3</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell" title="UQ_PRODUCT_STATUS_DISPLAY_ORDER_INDEX_1(DISPLAY_ORDER)">o</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell">表示順</td>
        <td class=" columnnamecell" id="product_status_display_order">DISPLAY_ORDER</td>
        <td class="typecell">INTEGER</td>
        <td class="sizecell"> 10 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>もう、ご想像の通りです。</pre>
        </td>
        <td class="subcell">displayOrder</td>
        <td class="subcell">Integer</td>
      </tr>
    </tbody>
  </table>

  <h2 id="purchase" title="type=TABLE, primaryKey={PURCHASE_ID}, nameLength=8, columnCount=12">
    (購入)PURCHASE
  </h2>
  <div class="tablecomment PURCHASE_comment" data-name="PURCHASE">
    <pre>一つの商品に対する購入を表現する(購入履歴とも言える)。
実業務であれば購入詳細というテーブルを作り、「購入という行為」と「その中身（詳細）」を違う粒度のデータとしてそれぞれ管理するのが一般的と言えるでしょう。というか、注文とか請求とかそういうことを考え始めたらもっと複雑になるはずですが、ExampleDBということで割り切っています。</pre>
  </div>
  <input type="hidden" value="PURCHASE">
  <table class="tablecontent">
    <thead>
      <tr>
        <th class="rownumhead">No.</th>
        <th>PK</th>
        <th>ID</th>
        <th>UQ</th>
        <th>IX</th>
        <th>Not<br>Null</th>
        <th>Alias</th>
        <th>Name</th>
        <th>Type</th>
        <th>Size</th>
        <th>ForeignTable</th>
        <th>ReferrerTable</th>
        <th>Classification</th>
        <th>ColumnComment</th>
        <th>PropertyName</th>
        <th>JavaType</th>
      </tr>
    </thead>
    <tbody id="purchase-body">
      <tr>
        <td class="rownumcell">1</td>
        <td class="flgcell" title="CONSTRAINT_9">o</td>
        <td class="flgcell">o</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell"></td>
        <td class=" columnnamecell" id="purchase_purchase_id">PURCHASE_ID</td>
        <td class="typecell">BIGINT</td>
        <td class="sizecell"> 19 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell"><a href="#purchase_payment" title="FK_PURCHASE_PAYMENT_PURCHASE">PURCHASE_PAYMENT</a>&nbsp;
        </td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>&nbsp;</pre>
        </td>
        <td class="subcell">purchaseId</td>
        <td class="subcell">Long</td>
      </tr>
      <tr>
        <td class="rownumcell">2</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell" title="UQ_PURCHASE_INDEX_9(MEMBER_ID, PRODUCT_ID, PURCHASE_DATETIME)">o<span
            class="flgplus">+</span></td>
        <td class="flgcell"
          title="FK_PURCHASE_MEMBER_INDEX_9(MEMBER_ID), IX_PURCHASE_DATETIME_MEMBER(PURCHASE_DATETIME, MEMBER_ID)">
          o<span class="flgplus">+</span></td>
        <td class="flgcell">*</td>
        <td class="aliascell">会員ID</td>
        <td class=" columnnamecell" id="purchase_member_id">MEMBER_ID</td>
        <td class="typecell">INTEGER</td>
        <td class="sizecell"> 10 </td>
        <td class="relcell"><a href="#member" title="FK_PURCHASE_MEMBER">MEMBER</a>&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>会員を参照するID。
購入を識別する自然キー(複合ユニーク制約)の筆頭要素。</pre>
        </td>
        <td class="subcell">memberId</td>
        <td class="subcell">Integer</td>
      </tr>
      <tr>
        <td class="rownumcell">3</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell" title="UQ_PURCHASE_INDEX_9(MEMBER_ID, PRODUCT_ID, PURCHASE_DATETIME)"><span
            class="flgplus">+</span>o</td>
        <td class="flgcell"
          title="FK_PURCHASE_PRODUCT_INDEX_9(PRODUCT_ID), IX_PURCHASE_PRODUCT_DATETIME(PRODUCT_ID, PURCHASE_DATETIME)">
          o<span class="flgplus">+</span></td>
        <td class="flgcell">*</td>
        <td class="aliascell">商品ID</td>
        <td class=" columnnamecell" id="purchase_product_id">PRODUCT_ID</td>
        <td class="typecell">INTEGER</td>
        <td class="sizecell"> 10 </td>
        <td class="relcell"><a href="#product" title="FK_PURCHASE_PRODUCT">PRODUCT</a>&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>あなたは何を買ったのか？</pre>
        </td>
        <td class="subcell">productId</td>
        <td class="subcell">Integer</td>
      </tr>
      <tr>
        <td class="rownumcell">4</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell" title="UQ_PURCHASE_INDEX_9(MEMBER_ID, PRODUCT_ID, PURCHASE_DATETIME)"><span
            class="flgplus">+</span>o</td>
        <td class="flgcell"
          title="IX_PURCHASE_DATETIME_MEMBER(PURCHASE_DATETIME, MEMBER_ID), IX_PURCHASE_PRODUCT_DATETIME(PRODUCT_ID, PURCHASE_DATETIME)">
          o<span class="flgplus">+</span></td>
        <td class="flgcell">*</td>
        <td class="aliascell">購入日時</td>
        <td class=" columnnamecell" id="purchase_purchase_datetime">PURCHASE_DATETIME</td>
        <td class="typecell">TIMESTAMP</td>
        <td class="sizecell"> 26, 6 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>購入した瞬間の日時。</pre>
        </td>
        <td class="subcell">purchaseDatetime</td>
        <td class="subcell">LocalDateTime</td>
      </tr>
      <tr>
        <td class="rownumcell">5</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell">購入数量</td>
        <td class=" columnnamecell" id="purchase_purchase_count">PURCHASE_COUNT</td>
        <td class="typecell">INTEGER</td>
        <td class="sizecell"> 10 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>購入した商品の一回の購入における数量。</pre>
        </td>
        <td class="subcell">purchaseCount</td>
        <td class="subcell">Integer</td>
      </tr>
      <tr>
        <td class="rownumcell">6</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell" title="IX_PURCHASE_PRICE(PURCHASE_PRICE)">o</td>
        <td class="flgcell">*</td>
        <td class="aliascell">購入価格</td>
        <td class=" columnnamecell" id="purchase_purchase_price">PURCHASE_PRICE</td>
        <td class="typecell">INTEGER</td>
        <td class="sizecell"> 10 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>購入によって実際に会員が支払った（支払う予定の）価格。
基本は商品の定価に購入数量を掛けたものになるが、ポイント利用や割引があったりと必ずしもそうはならない。</pre>
        </td>
        <td class="subcell">purchasePrice</td>
        <td class="subcell">Integer</td>
      </tr>
      <tr>
        <td class="rownumcell">7</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell">支払完了フラグ</td>
        <td class=" columnnamecell" id="purchase_payment_complete_flg">PAYMENT_COMPLETE_FLG</td>
        <td class="typecell">INTEGER</td>
        <td class="sizecell"> 10 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"><a href="#FlgCls">Flg</a></td>
        <td class="commentcell">
          <pre>この購入に関しての支払いが完了しているか否か。</pre>
        </td>
        <td class="subcell">paymentCompleteFlg</td>
        <td class="subcell">Integer</td>
      </tr>
      <tr>
        <td class="rownumcell">8</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell comcolcell"></td>
        <td class="comcolcell columnnamecell" id="purchase_register_datetime">REGISTER_DATETIME</td>
        <td class="typecell">TIMESTAMP</td>
        <td class="sizecell"> 26, 6 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>&nbsp;</pre>
        </td>
        <td class="subcell">registerDatetime</td>
        <td class="subcell">LocalDateTime</td>
      </tr>
      <tr>
        <td class="rownumcell">9</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell comcolcell"></td>
        <td class="comcolcell columnnamecell" id="purchase_register_user">REGISTER_USER</td>
        <td class="typecell">VARCHAR</td>
        <td class="sizecell"> 200 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>&nbsp;</pre>
        </td>
        <td class="subcell">registerUser</td>
        <td class="subcell">String</td>
      </tr>
      <tr>
        <td class="rownumcell">10</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell comcolcell"></td>
        <td class="comcolcell columnnamecell" id="purchase_update_datetime">UPDATE_DATETIME</td>
        <td class="typecell">TIMESTAMP</td>
        <td class="sizecell"> 26, 6 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>&nbsp;</pre>
        </td>
        <td class="subcell">updateDatetime</td>
        <td class="subcell">LocalDateTime</td>
      </tr>
      <tr>
        <td class="rownumcell">11</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell comcolcell"></td>
        <td class="comcolcell columnnamecell" id="purchase_update_user">UPDATE_USER</td>
        <td class="typecell">VARCHAR</td>
        <td class="sizecell"> 200 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>&nbsp;</pre>
        </td>
        <td class="subcell">updateUser</td>
        <td class="subcell">String</td>
      </tr>
      <tr>
        <td class="rownumcell">12</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell optcell"></td>
        <td class="optcell columnnamecell" id="purchase_version_no">VERSION_NO</td>
        <td class="typecell">BIGINT</td>
        <td class="sizecell"> 19 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>&nbsp;</pre>
        </td>
        <td class="subcell">versionNo</td>
        <td class="subcell">Long</td>
      </tr>
    </tbody>
  </table>

  <h2 id="purchase_payment" title="type=TABLE, primaryKey={PURCHASE_PAYMENT_ID}, nameLength=16, columnCount=9">
    (購入支払)PURCHASE_PAYMENT
  </h2>
  <div class="tablecomment PURCHASE_PAYMENT_comment" data-name="PURCHASE_PAYMENT">
    <pre>購入に対する支払。
分割払いもできるのでmanyとなり、会員からの孫テーブルのテストができてうれしい。</pre>
  </div>
  <input type="hidden" value="PURCHASE_PAYMENT">
  <table class="tablecontent">
    <thead>
      <tr>
        <th class="rownumhead">No.</th>
        <th>PK</th>
        <th>ID</th>
        <th>UQ</th>
        <th>IX</th>
        <th>Not<br>Null</th>
        <th>Alias</th>
        <th>Name</th>
        <th>Type</th>
        <th>Size</th>
        <th>ForeignTable</th>
        <th>ReferrerTable</th>
        <th>Classification</th>
        <th>ColumnComment</th>
        <th>PropertyName</th>
        <th>JavaType</th>
      </tr>
    </thead>
    <tbody id="purchase_payment-body">
      <tr>
        <td class="rownumcell">1</td>
        <td class="flgcell" title="CONSTRAINT_C">o</td>
        <td class="flgcell">o</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell">購入支払ID</td>
        <td class=" columnnamecell" id="purchase_payment_purchase_payment_id">PURCHASE_PAYMENT_ID</td>
        <td class="typecell">BIGINT</td>
        <td class="sizecell"> 19 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>連番</pre>
        </td>
        <td class="subcell">purchasePaymentId</td>
        <td class="subcell">Long</td>
      </tr>
      <tr>
        <td class="rownumcell">2</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell" title="FK_PURCHASE_PAYMENT_PURCHASE_INDEX_C(PURCHASE_ID)">o</td>
        <td class="flgcell">*</td>
        <td class="aliascell">購入ID</td>
        <td class=" columnnamecell" id="purchase_payment_purchase_id">PURCHASE_ID</td>
        <td class="typecell">BIGINT</td>
        <td class="sizecell"> 19 </td>
        <td class="relcell"><a href="#purchase" title="FK_PURCHASE_PAYMENT_PURCHASE">PURCHASE</a>&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>支払い対象の購入へのID</pre>
        </td>
        <td class="subcell">purchaseId</td>
        <td class="subcell">Long</td>
      </tr>
      <tr>
        <td class="rownumcell">3</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell" title="IX_PURCHASE_PAYMENT_DATETIME(PAYMENT_DATETIME, PAYMENT_AMOUNT)"><span
            class="flgplus">+</span>o</td>
        <td class="flgcell">*</td>
        <td class="aliascell">支払金額</td>
        <td class=" columnnamecell" id="purchase_payment_payment_amount">PAYMENT_AMOUNT</td>
        <td class="typecell">DECIMAL</td>
        <td class="sizecell"> 10, 2 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>支払った金額。さて、小数点なのはなぜでしょう？</pre>
        </td>
        <td class="subcell">paymentAmount</td>
        <td class="subcell">BigDecimal</td>
      </tr>
      <tr>
        <td class="rownumcell">4</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell" title="IX_PURCHASE_PAYMENT_DATETIME(PAYMENT_DATETIME, PAYMENT_AMOUNT)">o<span
            class="flgplus">+</span></td>
        <td class="flgcell">*</td>
        <td class="aliascell">支払日時</td>
        <td class=" columnnamecell" id="purchase_payment_payment_datetime">PAYMENT_DATETIME</td>
        <td class="typecell">TIMESTAMP</td>
        <td class="sizecell"> 26, 6 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>支払ったときの日時</pre>
        </td>
        <td class="subcell">paymentDatetime</td>
        <td class="subcell">LocalDateTime</td>
      </tr>
      <tr>
        <td class="rownumcell">5</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell">支払方法コード</td>
        <td class=" columnnamecell" id="purchase_payment_payment_method_code">PAYMENT_METHOD_CODE</td>
        <td class="typecell">CHAR</td>
        <td class="sizecell"> 3 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"><a href="#PaymentMethodCls">PaymentMethod</a></td>
        <td class="commentcell">
          <pre>手渡しや銀行振込など</pre>
        </td>
        <td class="subcell">paymentMethodCode</td>
        <td class="subcell">String</td>
      </tr>
      <tr>
        <td class="rownumcell">6</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell comcolcell"></td>
        <td class="comcolcell columnnamecell" id="purchase_payment_register_datetime">REGISTER_DATETIME</td>
        <td class="typecell">TIMESTAMP</td>
        <td class="sizecell"> 26, 6 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>&nbsp;</pre>
        </td>
        <td class="subcell">registerDatetime</td>
        <td class="subcell">LocalDateTime</td>
      </tr>
      <tr>
        <td class="rownumcell">7</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell comcolcell"></td>
        <td class="comcolcell columnnamecell" id="purchase_payment_register_user">REGISTER_USER</td>
        <td class="typecell">VARCHAR</td>
        <td class="sizecell"> 200 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>&nbsp;</pre>
        </td>
        <td class="subcell">registerUser</td>
        <td class="subcell">String</td>
      </tr>
      <tr>
        <td class="rownumcell">8</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell comcolcell"></td>
        <td class="comcolcell columnnamecell" id="purchase_payment_update_datetime">UPDATE_DATETIME</td>
        <td class="typecell">TIMESTAMP</td>
        <td class="sizecell"> 26, 6 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>&nbsp;</pre>
        </td>
        <td class="subcell">updateDatetime</td>
        <td class="subcell">LocalDateTime</td>
      </tr>
      <tr>
        <td class="rownumcell">9</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell comcolcell"></td>
        <td class="comcolcell columnnamecell" id="purchase_payment_update_user">UPDATE_USER</td>
        <td class="typecell">VARCHAR</td>
        <td class="sizecell"> 200 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>&nbsp;</pre>
        </td>
        <td class="subcell">updateUser</td>
        <td class="subcell">String</td>
      </tr>
    </tbody>
  </table>

  <h2 id="region" title="type=TABLE, primaryKey={REGION_ID}, nameLength=6, columnCount=2">
    (地域)REGION
  </h2>
  <div class="tablecomment REGION_comment" data-name="REGION">
    <pre>主に会員の住所に対応する漠然とした地域。
かなりざっくりした感じではある。唯一の業務的one-to-oneの親テーブルのケース。</pre>
  </div>
  <input type="hidden" value="REGION">
  <table class="tablecontent">
    <thead>
      <tr>
        <th class="rownumhead">No.</th>
        <th>PK</th>
        <th>ID</th>
        <th>UQ</th>
        <th>IX</th>
        <th>Not<br>Null</th>
        <th>Alias</th>
        <th>Name</th>
        <th>Type</th>
        <th>Size</th>
        <th>ForeignTable</th>
        <th>ReferrerTable</th>
        <th>Classification</th>
        <th>ColumnComment</th>
        <th>PropertyName</th>
        <th>JavaType</th>
      </tr>
    </thead>
    <tbody id="region-body">
      <tr>
        <td class="rownumcell">1</td>
        <td class="flgcell" title="CONSTRAINT_8F">o</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell">地域ID</td>
        <td class=" columnnamecell" id="region_region_id">REGION_ID</td>
        <td class="typecell">INTEGER</td>
        <td class="sizecell"> 10 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell"><a href="#member_address" title="FK_MEMBER_ADDRESS_REGION">MEMBER_ADDRESS</a>&nbsp;
        </td>
        <td class="relcell"><a href="#RegionCls">Region</a></td>
        <td class="commentcell">
          <pre>地域をしっかりと識別するID。
珍しく(固定的な)マスタテーブルとしては数値だが、Exampleなのでやはり色々なパターンがないとね、ってところで。</pre>
        </td>
        <td class="subcell">regionId</td>
        <td class="subcell">Integer</td>
      </tr>
      <tr>
        <td class="rownumcell">2</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell">地域名称</td>
        <td class=" columnnamecell" id="region_region_name">REGION_NAME</td>
        <td class="typecell">VARCHAR</td>
        <td class="sizecell"> 50 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>地域を漠然と表す名称。</pre>
        </td>
        <td class="subcell">regionName</td>
        <td class="subcell">String</td>
      </tr>
    </tbody>
  </table>

  <h2 id="service_rank" title="type=TABLE, primaryKey={SERVICE_RANK_CODE}, nameLength=12, columnCount=6">
    (サービスランク)SERVICE_RANK
  </h2>
  <div class="tablecomment SERVICE_RANK_comment" data-name="SERVICE_RANK">
    <pre>会員のサービスレベルを表現するランク。(ゴールドとかプラチナとか)</pre>
  </div>
  <input type="hidden" value="SERVICE_RANK">
  <table class="tablecontent">
    <thead>
      <tr>
        <th class="rownumhead">No.</th>
        <th>PK</th>
        <th>ID</th>
        <th>UQ</th>
        <th>IX</th>
        <th>Not<br>Null</th>
        <th>Alias</th>
        <th>Name</th>
        <th>Type</th>
        <th>Size</th>
        <th>ForeignTable</th>
        <th>ReferrerTable</th>
        <th>Classification</th>
        <th>ColumnComment</th>
        <th>PropertyName</th>
        <th>JavaType</th>
      </tr>
    </thead>
    <tbody id="service_rank-body">
      <tr>
        <td class="rownumcell">1</td>
        <td class="flgcell" title="CONSTRAINT_A">o</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell">サービスランクコード</td>
        <td class=" columnnamecell" id="service_rank_service_rank_code">SERVICE_RANK_CODE</td>
        <td class="typecell">CHAR</td>
        <td class="sizecell"> 3 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell"><a href="#member_service"
            title="FK_MEMBER_SERVICE_SERVICE_RANK_CODE">MEMBER_SERVICE</a>&nbsp;</td>
        <td class="relcell"><a href="#ServiceRankCls">ServiceRank</a></td>
        <td class="commentcell">
          <pre>サービスランクを識別するコード。</pre>
        </td>
        <td class="subcell">serviceRankCode</td>
        <td class="subcell">String</td>
      </tr>
      <tr>
        <td class="rownumcell">2</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell">サービスランク名称</td>
        <td class=" columnnamecell" id="service_rank_service_rank_name">SERVICE_RANK_NAME</td>
        <td class="typecell">VARCHAR</td>
        <td class="sizecell"> 50 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>サービスランクの名称。
ゴールドとかプラチナとか基本的には威厳のある名前</pre>
        </td>
        <td class="subcell">serviceRankName</td>
        <td class="subcell">String</td>
      </tr>
      <tr>
        <td class="rownumcell">3</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell">サービスポイント発生率</td>
        <td class=" columnnamecell" id="service_rank_service_point_incidence">SERVICE_POINT_INCIDENCE</td>
        <td class="typecell">DECIMAL</td>
        <td class="sizecell"> 5, 3 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>購入ごとのサービスポイントの発生率。
購入価格にこの値をかけた数が発生ポイント。ExampleDBとして数少ない貴重な小数点ありのカラム。</pre>
        </td>
        <td class="subcell">servicePointIncidence</td>
        <td class="subcell">BigDecimal</td>
      </tr>
      <tr>
        <td class="rownumcell">4</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell">新規受け入れ可能フラグ</td>
        <td class=" columnnamecell" id="service_rank_new_acceptable_flg">NEW_ACCEPTABLE_FLG</td>
        <td class="typecell">INTEGER</td>
        <td class="sizecell"> 10 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"><a href="#FlgCls">Flg</a></td>
        <td class="commentcell">
          <pre>このランクへの新規受け入れができるかどうか。</pre>
        </td>
        <td class="subcell">newAcceptableFlg</td>
        <td class="subcell">Integer</td>
      </tr>
      <tr>
        <td class="rownumcell">5</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell">説明</td>
        <td class=" columnnamecell" id="service_rank_description">DESCRIPTION</td>
        <td class="typecell">VARCHAR</td>
        <td class="sizecell"> 200 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>ランクに関する業務的な説明。</pre>
        </td>
        <td class="subcell">description</td>
        <td class="subcell">String</td>
      </tr>
      <tr>
        <td class="rownumcell">6</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell" title="UQ_SERVICE_RANK_DISPLAY_ORDER_INDEX_A(DISPLAY_ORDER)">o</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell">表示順</td>
        <td class=" columnnamecell" id="service_rank_display_order">DISPLAY_ORDER</td>
        <td class="typecell">INTEGER</td>
        <td class="sizecell"> 10 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>UI上の表示順を表現する番号。</pre>
        </td>
        <td class="subcell">displayOrder</td>
        <td class="subcell">Integer</td>
      </tr>
    </tbody>
  </table>

  <h2 id="withdrawal_reason" title="type=TABLE, primaryKey={WITHDRAWAL_REASON_CODE}, nameLength=17, columnCount=3">
    (退会理由)WITHDRAWAL_REASON
  </h2>
  <div class="tablecomment WITHDRAWAL_REASON_comment" data-name="WITHDRAWAL_REASON">
    <pre>会員に選ばせる定型的な退会理由のマスタ。そういえば、これ表示順カラムがないですねぇ...</pre>
  </div>
  <input type="hidden" value="WITHDRAWAL_REASON">
  <table class="tablecontent">
    <thead>
      <tr>
        <th class="rownumhead">No.</th>
        <th>PK</th>
        <th>ID</th>
        <th>UQ</th>
        <th>IX</th>
        <th>Not<br>Null</th>
        <th>Alias</th>
        <th>Name</th>
        <th>Type</th>
        <th>Size</th>
        <th>ForeignTable</th>
        <th>ReferrerTable</th>
        <th>Classification</th>
        <th>ColumnComment</th>
        <th>PropertyName</th>
        <th>JavaType</th>
      </tr>
    </thead>
    <tbody id="withdrawal_reason-body">
      <tr>
        <td class="rownumcell">1</td>
        <td class="flgcell" title="CONSTRAINT_10">o</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell">退会理由コード</td>
        <td class=" columnnamecell" id="withdrawal_reason_withdrawal_reason_code">WITHDRAWAL_REASON_CODE</td>
        <td class="typecell">CHAR</td>
        <td class="sizecell"> 3 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell"><a href="#member_withdrawal"
            title="FK_MEMBER_WITHDRAWAL_WITHDRAWAL_REASON">MEMBER_WITHDRAWAL</a>&nbsp;</td>
        <td class="relcell"><a href="#WithdrawalReasonCls">WithdrawalReason</a></td>
        <td class="commentcell">
          <pre>&nbsp;</pre>
        </td>
        <td class="subcell">withdrawalReasonCode</td>
        <td class="subcell">String</td>
      </tr>
      <tr>
        <td class="rownumcell">2</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell">退会理由テキスト</td>
        <td class=" columnnamecell" id="withdrawal_reason_withdrawal_reason_text">WITHDRAWAL_REASON_TEXT</td>
        <td class="typecell">CLOB</td>
        <td class="sizecell"> 2147483647 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>退会理由の内容。
テキスト形式なので目いっぱい書けるが、そうするとUI側できれいに見せるのが大変でしょうね。</pre>
        </td>
        <td class="subcell">withdrawalReasonText</td>
        <td class="subcell">String</td>
      </tr>
      <tr>
        <td class="rownumcell">3</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell"> &nbsp;</td>
        <td class="flgcell" title="UQ_WITHDRAWAL_REASON_DISPLAY_ORDER_INDEX_1(DISPLAY_ORDER)">o</td>
        <td class="flgcell">&nbsp;</td>
        <td class="flgcell">*</td>
        <td class="aliascell"></td>
        <td class=" columnnamecell" id="withdrawal_reason_display_order">DISPLAY_ORDER</td>
        <td class="typecell">INTEGER</td>
        <td class="sizecell"> 10 </td>
        <td class="relcell">&nbsp;&nbsp;</td>
        <td class="relcell">&nbsp;</td>
        <td class="relcell"> &nbsp;</td>
        <td class="commentcell">
          <pre>&nbsp;</pre>
        </td>
        <td class="subcell">displayOrder</td>
        <td class="subcell">Integer</td>
      </tr>
    </tbody>
  </table>


  <h2 id="cdef">Classification Definition</h2>
  <table>
    <thead>
      <tr>
        <th>Classification</th>
        <th>Type</th>
        <th>Top Comment</th>
        <th>Definition</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Flg</td>
        <td class="clstypecell"> implicit</td>
        <td>general&nbsp;boolean&nbsp;classification&nbsp;for&nbsp;every&nbsp;flg-column</td>
        <td>
          <table class="child">
            <tbody>
              <tr>
                <th id="FlgCls">Code</th>
                <th>Name</th>
                <th>Alias</th>
                <th>Comment</th>
                <th>Sisters</th>
              </tr>
              <tr>
                <td>1</td>
                <td>True</td>
                <td>Checked</td>
                <td class="commentcell">means&nbsp;yes</td>
                <td>true</td>
              </tr>
              <tr>
                <td>0</td>
                <td>False</td>
                <td>Unchecked</td>
                <td class="commentcell">means&nbsp;no</td>
                <td>false</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>MemberStatus</td>
        <td class="clstypecell">table</td>
        <td>status&nbsp;of&nbsp;member&nbsp;from&nbsp;entry&nbsp;to&nbsp;withdrawal</td>
        <td>
          <table class="child">
            <tbody>
              <tr>
                <th id="MemberStatusCls">Code</th>
                <th>Name</th>
                <th>Comment</th>
                <th><span class="clsgroup"
                    title="means member that can use services :: [Formalized, Provisional]">serviceAvailable</span>
                </th>
                <th><span class="clsgroup"
                    title="Members are not formalized yet :: [Provisional]">shortOfFormalized</span>
                </th>
              </tr>
              <tr>
                <td>FML</td>
                <td>Formalized</td>
                <td class="commentcell">
                  as&nbsp;formal&nbsp;member,&nbsp;allowed&nbsp;to&nbsp;use&nbsp;all&nbsp;service</td>
                <td class="flgcell">o</td>
                <td class="flgcell"> &nbsp;</td>
              </tr>
              <tr>
                <td>WDL</td>
                <td>Withdrawal</td>
                <td class="commentcell">
                  withdrawal&nbsp;is&nbsp;fixed,&nbsp;not&nbsp;allowed&nbsp;to&nbsp;use&nbsp;service
                </td>
                <td class="flgcell"> &nbsp;</td>
                <td class="flgcell"> &nbsp;</td>
              </tr>
              <tr>
                <td>PRV</td>
                <td>Provisional</td>
                <td class="commentcell">
                  first&nbsp;status&nbsp;after&nbsp;entry,&nbsp;allowed&nbsp;to&nbsp;use&nbsp;only&nbsp;part&nbsp;of&nbsp;service
                </td>
                <td class="flgcell">o</td>
                <td class="flgcell">o</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>ServiceRank</td>
        <td class="clstypecell">table</td>
        <td>rank&nbsp;of&nbsp;service&nbsp;member&nbsp;gets</td>
        <td>
          <table class="child">
            <tbody>
              <tr>
                <th id="ServiceRankCls">Code</th>
                <th>Name</th>
                <th>Comment</th>
              </tr>
              <tr>
                <td>PLT</td>
                <td>Platinum</td>
                <td class="commentcell">platinum&nbsp;rank</td>
              </tr>
              <tr>
                <td>GLD</td>
                <td>Gold</td>
                <td class="commentcell">gold&nbsp;rank</td>
              </tr>
              <tr>
                <td>SIL</td>
                <td>Silver</td>
                <td class="commentcell">silver&nbsp;rank</td>
              </tr>
              <tr>
                <td>BRZ</td>
                <td>Bronze</td>
                <td class="commentcell">bronze&nbsp;rank</td>
              </tr>
              <tr>
                <td>PLS</td>
                <td>Plastic</td>
                <td class="commentcell">plastic&nbsp;rank</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>Region</td>
        <td class="clstypecell">table</td>
        <td>mainly&nbsp;region&nbsp;of&nbsp;member&nbsp;address</td>
        <td>
          <table class="child">
            <tbody>
              <tr>
                <th id="RegionCls">Code</th>
                <th>Name</th>
                <th>Comment</th>
              </tr>
              <tr>
                <td>1</td>
                <td>America</td>
                <td class="commentcell">&nbsp;</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Canada</td>
                <td class="commentcell">&nbsp;</td>
              </tr>
              <tr>
                <td>3</td>
                <td>China</td>
                <td class="commentcell">&nbsp;</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Chiba</td>
                <td class="commentcell">&nbsp;</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>WithdrawalReason</td>
        <td class="clstypecell">table</td>
        <td>reason&nbsp;for&nbsp;member&nbsp;withdrawal</td>
        <td>
          <table class="child">
            <tbody>
              <tr>
                <th id="WithdrawalReasonCls">Code</th>
                <th>Name</th>
                <th>Comment</th>
              </tr>
              <tr>
                <td>SIT</td>
                <td>Sit</td>
                <td class="commentcell">site&nbsp;is&nbsp;not&nbsp;kindness</td>
              </tr>
              <tr>
                <td>PRD</td>
                <td>Prd</td>
                <td class="commentcell">no&nbsp;attractive&nbsp;product</td>
              </tr>
              <tr>
                <td>FRT</td>
                <td>Frt</td>
                <td class="commentcell">because&nbsp;of&nbsp;furiten</td>
              </tr>
              <tr>
                <td>OTH</td>
                <td>Oth</td>
                <td class="commentcell">other&nbsp;reasons</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>ProductCategory</td>
        <td class="clstypecell">table</td>
        <td>category&nbsp;of&nbsp;product.&nbsp;self&nbsp;reference</td>
        <td>
          <table class="child">
            <tbody>
              <tr>
                <th id="ProductCategoryCls">Code</th>
                <th>Name</th>
                <th>Comment</th>
              </tr>
              <tr>
                <td>MSC</td>
                <td>Music</td>
                <td class="commentcell">&nbsp;</td>
              </tr>
              <tr>
                <td>FOD</td>
                <td>Food</td>
                <td class="commentcell">&nbsp;</td>
              </tr>
              <tr>
                <td>HEB</td>
                <td>Herb</td>
                <td class="commentcell">of&nbsp;Food</td>
              </tr>
              <tr>
                <td>MCD</td>
                <td>MusicCD</td>
                <td class="commentcell">of&nbsp;Music</td>
              </tr>
              <tr>
                <td>INS</td>
                <td>Instruments</td>
                <td class="commentcell">of&nbsp;Music</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>ProductStatus</td>
        <td class="clstypecell">table</td>
        <td>status&nbsp;for&nbsp;product</td>
        <td>
          <table class="child">
            <tbody>
              <tr>
                <th id="ProductStatusCls">Code</th>
                <th>Name</th>
                <th>Comment</th>
              </tr>
              <tr>
                <td>ONS</td>
                <td>OnSaleProduction</td>
                <td class="commentcell">&nbsp;</td>
              </tr>
              <tr>
                <td>PST</td>
                <td>ProductionStop</td>
                <td class="commentcell">&nbsp;</td>
              </tr>
              <tr>
                <td>SST</td>
                <td>SaleStop</td>
                <td class="commentcell">&nbsp;</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>PaymentMethod</td>
        <td class="clstypecell"> implicit</td>
        <td>method&nbsp;of&nbsp;payment&nbsp;for&nbsp;purchase</td>
        <td>
          <table class="child">
            <tbody>
              <tr>
                <th id="PaymentMethodCls">Code</th>
                <th>Name</th>
                <th>Alias</th>
                <th>Comment</th>
                <th><span class="clsgroup" title="the most recommended method :: [ByHand]">recommended</span></th>
              </tr>
              <tr>
                <td>HAN</td>
                <td>ByHand</td>
                <td>by hand</td>
                <td class="commentcell">payment&nbsp;by&nbsp;hand,&nbsp;face-to-face</td>
                <td class="flgcell">o</td>
              </tr>
              <tr>
                <td>BAK</td>
                <td>BankTransfer</td>
                <td>bank transfer</td>
                <td class="commentcell">bank&nbsp;transfer&nbsp;payment</td>
                <td class="flgcell"> &nbsp;</td>
              </tr>
              <tr>
                <td>CRC</td>
                <td>CreditCard</td>
                <td>credit card</td>
                <td class="commentcell">credit&nbsp;card&nbsp;payment</td>
                <td class="flgcell"> &nbsp;</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>

  <h2 id="arrangequery">ArrangeQuery List</h2>
  <h3 id="member_arrqy"><a href="#member">MEMBER</a></h3>
  <h4 id="member_arrqy_query">MemberCQ</h4>
  <dl class="arrqylist">
    <dt>arrangeLogin() <span class="commentdesc">// Arrange member login query.</span></dt>
    <dd>&nbsp;</dd>
    <dt>arrangeLoginByIdentity() <span class="commentdesc">// Arrange member login query by identity.</span></dt>
    <dd>&nbsp;</dd>
  </dl>
  <h2 id="procedure">Procedure</h2>

  <h2 id="diagram">Schema Diagram</h2>
  <h3>maihamadb_erd</h3>
  <p>
    <a href="../../../modeling/maihamadb.png">
      <img src="../../../modeling/maihamadb.png" alt="ER Diagram">
    </a>
  </p>

  <h2 id="thanks">Thanks</h2>
  <p>
    Created by <a href="http://dbflute.org/">DBFlute(AutoGenerator)</a>
  </p>

  <!-- Only used by dbflute intro http://dbflute.seasar.org/ja/manual/function/helper/intro/index.html -->
  <div id="decomment-modal" class="decommentmodal">
    <div class="decommentmodalcontent">
      <div id="decomment-close" class="decommentmodal-close-btn"><span>x</span></div>
      <p>Input the new column comment of <span id="decomment-modal-column-info"></span></p>
      <textarea id="decomment-input" class="decommentinput" rows="5"></textarea>
      <div id="decomment-user-input" class="decomment-user-input"><input type="text" id="decomment-user-name"
          class="decomment-user-name" placeholder="User name"><span class="decomment-user-name-desc">*required
          (saved in cookie)</span></div>
      <div class="decommentmodal-ok-area"><button id="decomment-ok" class="decommentmodal-ok-btn">OK</button>
      </div>
    </div>
  </div>
  <script>
    /**
     * Incremental Search contributed by makotot (Thanks!)
     *
     * and extended by jflute:
     *  o style adjustment
     *  o varying name index
     *  o prefix search priority
     */

    // this index value depends on DBFlute settings
    // so defines it here as global for easy-to-understand
    var NAME_INDEX = 2; // number, alias, name

    function Incremental(targetInput, dist) {
      this.targetInput = targetInput;
      this.dist = dist;
      this.query = '';
      this.suggestionIdx = 0;
      this.currentSuggestion = '';
    }

    Incremental.prototype = {

      /**
       * Init
       */
      init: function () {
        var dataList = this.getDataList();

        this.distDataList = dataList.distList;
        this.sectionList = dataList.sectionList;
        this.buildSuggestList();
        this.attachEvent();
      },

      /**
       * Build sugget list
       */
      buildSuggestList: function () {
        var fragment = document.createDocumentFragment(),
          ul = document.getElementById('suggestion-list');

        this.ul = ul;
        this.setupLinkElement(fragment); // for prefix area
        this.setupLinkElement(fragment); // for contain area
        ul.appendChild(fragment);

        this.attachSuggestionEvent();
      },

      /**
       * Setup link element
       */
      setupLinkElement: function (fragment) {
        var li, anchor;
        for (var i = 0, max = this.distDataList.length; i < max; i++) {
          li = document.createElement('li');
          li.style.display = 'none';
          anchor = document.createElement('a');
          anchor.href = this.sectionList[i];

          var distData = this.distDataList[i];
          if (document.body.dataset) {
            anchor.dataset.name = distData;
          } else {
            anchor.setAttribute('data-name', distData); // for searching
          }

          this.util.setElemTxt(anchor, distData); // for display

          li.appendChild(anchor);
          fragment.appendChild(li);
        }
      },

      /**
       * Attach event
       */
      attachEvent: function () {
        var self = this,
          eventHandler = function () {
            self.displaySuggestion();
          },
          eventName = ('oninput' in window) ? 'input' : 'propertychange';

        this.util.addEvent(this.targetInput, eventName, eventHandler);
      },

      /**
       * Display suggestion
       */
      displaySuggestion: function () {
        this.query = (this.util.trim(this.targetInput.value)).toLowerCase();

        var i, j, max;

        this.resetSuggestion();

        var visibleList;

        if (this.query.length) {
          var alreadyCheckedData = {}; // to suppress duplicate check (key only used)
          var distDataCount = this.distDataList.length; // to determine prefix or contain area
          var hitCount = 0; // to suppress large result (primitive counter just in case)
          for (i = 0, max = this.ul.childNodes.length; i < max && hitCount <= 100; i++) {
            var childNode = this.ul.childNodes[i];
            var anchor = childNode.getElementsByTagName('a')[0]; // always only one
            var dataName = anchor.getAttribute('data-name'); // e.g. table name
            if (alreadyCheckedData[dataName] != null) { // to suppress duplicate check
              continue;
            }
            if (i < distDataCount && dataName.lastIndexOf(this.query, 0) > -1) { // prefix hit
              childNode.searchDirection = 'prefix';
              alreadyCheckedData[dataName] = 'dummy';
              ++hitCount;
            } else if (i >= distDataCount && dataName.indexOf(this.query) > -1) { // contain hit
              childNode.searchDirection = 'contain';
              alreadyCheckedData[dataName] = 'dummy';
              ++hitCount;
            } else {
              childNode.searchDirection = 'none';
            }
          }

          visibleList = this.filterVisibleChild();

          if (visibleList.length) {
            visibleList[0].style.backgroundColor = '#CCCCCC';
          }
        } else {
          for (i = 0, max = this.ul.childNodes.length; i < max; i++) {
            var childNode = this.ul.childNodes[i];
            childNode.searchDirection = null; // clear
            childNode.style.display = 'none'; // all none
          }
        }
      },

      /**
       * Get data list
       */
      getDataList: function () {
        var tr = this.dist.getElementsByTagName('tr'),
          distDataList = [],
          sectionIdList = [];

        for (var i = 0, max = tr.length; i < max; i++) {
          distDataList.push(this.util.getElemTxt(tr[i].getElementsByTagName('td')[NAME_INDEX]).toLowerCase());
          sectionIdList.push(tr[i].getElementsByTagName('td')[NAME_INDEX].getElementsByTagName('a')[0].getAttribute('href'));
        }

        return {
          distList: distDataList,
          sectionList: sectionIdList
        };
      },

      /**
       * Attach suggestion event
       */
      attachSuggestionEvent: function () {
        var self = this;

        this.util.addEvent(this.targetInput, 'keyup', function (e) {
          self.selectSuggestion(e);
          self.setInputValue(e);
        });
        this.util.addEvent(this.targetInput, 'blur', function () {
          setTimeout(function () {
            self.resetSuggestion();
          }, 100);
        });
      },

      /**
       * Select suggestion
       */
      selectSuggestion: function (ev) {
        var keyCode = ev.keyCode,
          visibleChildNodes = this.filterVisibleChild(),
          prevIdx;

        if (keyCode === 38 || keyCode === 40) {

          if (visibleChildNodes.length) {
            prevIdx = this.suggestionIdx;

            if (keyCode === 40 && this.suggestionIdx < visibleChildNodes.length - 1) {
              this.suggestionIdx++;
            }

            if (keyCode === 38 && this.suggestionIdx > 0) {
              this.suggestionIdx--;
            }

            if (prevIdx > -1) {
              visibleChildNodes[prevIdx].style.backgroundColor = '';
            }

            visibleChildNodes[this.suggestionIdx].style.backgroundColor = '#CCCCCC';
            this.currentSuggestion = this.util.getElemTxt(visibleChildNodes[this.suggestionIdx]);

          } else if (this.query.length) {

            this.displaySuggestion();
          }
        }

        if (!this.query.length) {
          this.resetSuggestion();
        }
      },

      /**
       * Set input value
       * @param {Object} ev
       */
      setInputValue: function (ev) {
        var keyCode = ev.keyCode,
          visibleChildNodes = this.filterVisibleChild(),
          currentSuggestionTxt,
          selectedSection;

        if (visibleChildNodes.length) {
          currentSuggestionTxt = this.util.getElemTxt(visibleChildNodes[this.suggestionIdx]);

          if (keyCode === 13) {
            this.targetInput.value = currentSuggestionTxt;
            selectedSection = this.getSelectedSection(visibleChildNodes[this.suggestionIdx]);
            this.clearSuggestion();
            this.scrollToSelectedSection(selectedSection);
            this.setHash(selectedSection);
          }
        }
      },

      /**
       * Filter visible child
       */
      filterVisibleChild: function () {
        var visibleChildNodes = [];

        // ordered by prefix, contain
        for (var i = 0, max = this.ul.childNodes.length; i < max; i++) {
          var childNode = this.ul.childNodes[i];
          if (childNode.searchDirection === 'prefix') {
            visibleChildNodes.push(childNode);
            childNode.style.display = 'block';
          } else if (childNode.searchDirection === 'contain') {
            visibleChildNodes.push(childNode);
            childNode.style.display = 'block';
          } else {
            childNode.style.display = 'none';
          }
        }

        return visibleChildNodes;
      },

      /**
       * Clear suggestion
       */
      clearSuggestion: function () {
        for (var i = 0, max = this.ul.childNodes.length; i < max; i++) {
          var childNode = this.ul.childNodes[i];
          childNode.searchDirection = null;
          childNode.style.display = 'none';
          childNode.style.backgroundColor = '';
        }
      },

      /**
       * Reset suggestion
       */
      resetSuggestion: function () {
        this.clearSuggestion();

        this.suggestionIdx = 0;
      },

      /**
       * Get selected section
       * @param {Object} suggestionNode
       * @return {number} Selected Index
       */
      getSelectedSection: function (suggestionNode) {
        var selectedIdx;

        for (var i = 0, max = this.ul.childNodes.length; i < max; i++) {
          if (this.ul.childNodes[i] === suggestionNode) {
            selectedIdx = i;
            break;
          }
        }

        return selectedIdx;
      },

      /**
       * Scroll to selected section
       * @param {number} idx
       */
      scrollToSelectedSection: function (idx) {
        var selectedId = this.ul.childNodes[idx].getElementsByTagName('a')[0].href.split('#')[1],
          targetSection = document.getElementById(selectedId);

        window.scrollTo(0, targetSection.offsetTop);
        this.targetInput.blur();
      },

      /**
       * Set hash
       */
      setHash: function (idx) {
        var selectedId = this.ul.childNodes[idx].getElementsByTagName('a')[0].href.split('#')[1];

        window.location.hash = selectedId;
      }
    };


    Incremental.prototype.util = {

      addEvent: function (elem, ev, fn) {
        if (elem.addEventListener) {
          elem.addEventListener(ev, fn, false);
        } else if (elem.attachEvent) {
          elem.attachEvent('on' + ev, fn);
        } else {
          elem['on' + ev] = fn;
        }
      },

      trim: function (txt) {
        return (String.prototype.trim) ? txt.trim() : txt.replace(/^\s+|\s+$/g, '');
      },

      getElemTxt: function (elem) {
        return (elem.innerText !== undefined) ? elem.innerText : elem.textContent;
      },

      setElemTxt: function (elem, data) {
        return (elem.innerText !== undefined) ? (elem.innerText = data) : (elem.textContent = data);
      }
    };

    var searcher = new Incremental(document.getElementById('incremental-search-field'), document.getElementById('table-list-body'));
    searcher.init();
  </script>
  <script>

    /**
     * @author deco
     */
    function ApiClient() {
    }

    ApiClient.prototype = {
      /**
       * Fetch decomment viertual pickup.
       * @param {function} successCallback
       */
      fetchDecomment: function (successCallback) {
        var path = '/api/document/decomment/' + DecommentUtil.getSchemaName() + '/pickup';
        var method = 'GET';
        var errorCallback = function () {
          alert('Error!! cannot save decomment.');
        }
        this.request(path, method, null, successCallback, errorCallback);
      },
      /**
       * Request save decomment
       * @param {Object} params - Request parameters
       * @param {function} successCallback
       */
      saveDecomment: function (params, successCallback) {
        var path = '/api/document/decomment/' + DecommentUtil.getSchemaName() + '/save';
        var method = 'POST';
        var errorCallback = function () {
          alert('Error!! cannot save new column comment.');
        }
        this.request(path, method, params, successCallback, errorCallback);
      },
      /**
       * Post mapping table.
       * @param {Object} params - Request parameters
       * @param {function} successCallback
       */
      postMapping: function (params, successCallback) {
        var path = '/api/document/decomment/' + DecommentUtil.getSchemaName() + '/mapping';
        var method = 'POST';
        var errorCallback = function () {
          alert('Error!! cannot save new table mapping.');
        }
        this.request(path, method, params, successCallback, errorCallback);
      },
      /**
       * Request to intro server
       * @param {string} path
       * @param {string} method
       * @param {object} params
       * @param {function} successCallback
       * @param {function} errorCallback
       */
      request: function (path, method, params, successCallback, errorCallback) {
        var http = new XMLHttpRequest();
        http.withCredentials = true;
        var url = DecommentUtil.getHostName() + path;
        http.open(method, url, true);

        http.onreadystatechange = function () {
          if (http.readyState === 4) {
            if (http.status === 200) {
              successCallback(http.response)
            } else {
              errorCallback()
            }
          }
        };
        if (params != null) {
          http.send(JSON.stringify(params, null, "  "));
        } else {
          http.send();
        }
      }
    }

    /**
     * @author deco
     */
    var DecommentUtil = new function () {
      /**
       * Get host name
       * @returns {string} Host name
       */
      this.getHostName = function () {
        return 'http://' + window.location.host;
      },
        /**
         * Get scheme name from url
         * @returns {string} Scheme name
         */
        this.getSchemaName = function () {
          return "maihamadb";
        },
        /**
         * Escape inputed text
         * @param {String} string - text
         */
        this.escapeInputText = function (string) {
          if (typeof string !== 'string') {
            return string;
          }
          return string.replace(/[&'\`"<>]/g, function (match) {
            return {
              '&': '&amp;',
              "'": '&#x27;',
              '\`': '&#x60;',
              '"': '&quot;',
              '<': '&lt;',
              '>': '&gt;',
            }[match]
          });
        },
        /**
         * Escape newline character of text
         * @param {String} string - text
         */
        this.escapeNewlineCharacter = function (string) {
          return string.split('<br>').join('\n');
        },
        /**
         * Delete unnecessary whitespace
         * @param {String} string - text
         */
        this.deleteUnnecessaryWhitespace = function (string) {
          var commentArray = string.split("\n");
          var result = "";
          for (var i = 0; i < commentArray.length; i++) {
            result += commentArray[i].replace(/\s+$/g, '');
            if (!(i == commentArray.length - 1)) {
              result += '\n';
            }
          }
          return result.trim();
        },

        /**
         * Unescape whitespace character of text
         * @param {String} string - text
         */
        this.unescapeWhitespace = function (string) {
          return string.split('&nbsp;').join(' ');
        },
        /**
         * Check is opening with server mode.
         */
        this.isDecommentServer = function () {
          return document.getElementById("decomment_server") != null;
        }
    }

    /**
     * @author deco
     */
    function StoreClient() {
      // setup from dbflute if decomment pickup exists
      this.embeddedPickup = {
        'tables': [
        ]
      }
      this.pickupStore = {
        'MEMBER': {
          'databaseComment': '会員のプロフィールやアカウントなどの基本情報を保持する。<br>基本的に物理削除はなく、退会したらステータスが退会会員になる。<br>ライフサイクルやカテゴリの違う会員情報は、one-to-oneなどの関連テーブルにて。'
          , 'columns': {
            'MEMBER_ID': {
              'databaseComment': '連番として自動採番される。会員IDだけに限らず採番方法はDBMS次第。'
            }
            , 'MEMBER_NAME': {
              'databaseComment': '会員のフルネームの名称。<br>苗字と名前を分けて管理することが多いが、ここでは単純にひとまとめ。'
            }
            , 'MEMBER_ACCOUNT': {
              'databaseComment': 'ログインIDとして利用する。<br>昨今メールアドレスをログインIDとすることが多いので、あまり見かけないかも!?'
            }
            , 'MEMBER_STATUS_CODE': {
              'databaseComment': '会員ステータスを参照するコード。<br>ステータスが変わるたびに、このカラムが更新される。'
            }
            , 'FORMALIZED_DATETIME': {
              'databaseComment': '会員が正式に確定した(正式会員になった)日時。<br>一度確定したらもう二度と更新されないはずだ！'
            }
            , 'BIRTHDATE': {
              'databaseComment': '必須項目ではないので、このデータがない会員もいる。'
            }
            , 'REGISTER_DATETIME': {
              'databaseComment': 'レコードが登録された日時。<br>会員が登録された日時とほぼ等しいが、そういった業務的な役割を兼務させるのはあまり推奨されない。といいつつ、このテーブルには会員登録日時がない...<br>仕様はどのテーブルでも同じなので、共通カラムの説明はこのテーブルでしか書かない。'
            }
            , 'REGISTER_USER': {
              'databaseComment': 'レコードを登録したユーザ。<br>会員テーブルであれば当然、会員自身であるはずだが、他のテーブルの場合では管理画面から運用者による登録など考えられるので、しっかり保持しておく。'
            }
            , 'UPDATE_DATETIME': {
              'databaseComment': 'レコードが（最後に）更新された日時。<br>業務的な利用はあまり推奨されないと別項目で説明したが、このカラムはソートの要素としてよく利用される。'
            }
            , 'UPDATE_USER': {
              'databaseComment': 'レコードを更新したユーザ。<br>システムは誰が何をしたのかちゃんと覚えているのさ。'
            }
            , 'VERSION_NO': {
              'databaseComment': 'データのバージョンを示すナンバー。<br>更新回数と等しく、主に排他制御のために利用される。'
            }
          }
        }
        , 'MEMBER_ADDRESS': {
          'databaseComment': '会員の住所に関する情報で、同時に有効期間ごとに履歴管理されている。<br>会員を基点に考えた場合、構造的には&nbsp;one-to-many&nbsp;だが、業務的な定型条件で&nbsp;one-to-one&nbsp;になる。このような構造を「業務的one-to-one」と呼ぶ！<br>有効期間は隙間なく埋められるが、ここでは住所情報のない会員も存在し、厳密には(業務的な)&nbsp;"1&nbsp;:&nbsp;0..1"&nbsp;である。'
          , 'columns': {
            'MEMBER_ADDRESS_ID': {
              'databaseComment': '会員住所を識別するID。<br>期間ごとに同じ会員のデータを保持することがあるため、これは単なるPKであってFKではない。'
            }
            , 'MEMBER_ID': {
              'databaseComment': '会員を参照するID。<br>期間ごとのデータがあるので、これだけではユニークにはならない。有効開始日と合わせて複合ユニーク制約となるが、厳密には完全な制約にはなっていない。有効期間の概念はRDBでは表現しきれないのである。'
            }
            , 'VALID_BEGIN_DATE': {
              'databaseComment': '一つの有効期間の開始を示す日付。<br>前の有効終了日の次の日の値が格納される。'
            }
            , 'VALID_END_DATE': {
              'databaseComment': '有効期間の終了日。<br>期間の最後の日が格納される。基本的に、次の有効開始日の一日前の値となるが、次の有効期間がない場合は&nbsp;9999/12/31&nbsp;となる。'
            }
            , 'ADDRESS': {
              'databaseComment': 'まるごと住所'
            }
            , 'REGION_ID': {
              'databaseComment': '地域を参照するID。かなり漠然とした地域。'
            }
            , 'REGISTER_DATETIME': {
              'databaseComment': ''
            }
            , 'REGISTER_USER': {
              'databaseComment': ''
            }
            , 'UPDATE_DATETIME': {
              'databaseComment': ''
            }
            , 'UPDATE_USER': {
              'databaseComment': ''
            }
            , 'VERSION_NO': {
              'databaseComment': ''
            }
          }
        }
        , 'MEMBER_FOLLOWING': {
          'databaseComment': 'とある会員が他の会員をフォローできる。すると、フォローした会員の購入履歴が閲覧できる。'
          , 'columns': {
            'MEMBER_FOLLOWING_ID': {
              'databaseComment': '連番'
            }
            , 'MY_MEMBER_ID': {
              'databaseComment': '気になった人がいて...勇気を振り絞った会員のID。'
            }
            , 'YOUR_MEMBER_ID': {
              'databaseComment': 'いきなりのアクションに...ちょっと心揺らいだ会員のID。'
            }
            , 'FOLLOW_DATETIME': {
              'databaseComment': 'ふりかえるとちょっと恥ずかしい気持ちになる日時'
            }
          }
        }
        , 'MEMBER_LOGIN': {
          'databaseComment': 'ログインするたびに登録されるログイン履歴。<br>登録されたら更新されるも削除されることもない。さらには、登録する人もプログラムもはっきりしているので、(紙面の都合上もあって)ここでは共通カラムは省略している。'
          , 'columns': {
            'MEMBER_LOGIN_ID': {
              'databaseComment': ''
            }
            , 'MEMBER_ID': {
              'databaseComment': ''
            }
            , 'LOGIN_DATETIME': {
              'databaseComment': 'ログインした瞬間の日時。<br>同じ会員が同じ日時にログインはできない。(ユニーク制約で重複ログインできないようにしてある)'
            }
            , 'MOBILE_LOGIN_FLG': {
              'databaseComment': 'モバイル機器からのログインか否か。'
            }
            , 'LOGIN_MEMBER_STATUS_CODE': {
              'databaseComment': 'ログイン時の会員ステータス'
            }
          }
        }
        , 'MEMBER_SECURITY': {
          'databaseComment': '会員とは&nbsp;one-to-one&nbsp;で、会員一人につき必ず一つのセキュリティ情報がある'
          , 'columns': {
            'MEMBER_ID': {
              'databaseComment': 'そのまま&nbsp;one-to-one&nbsp;を構成するためのFKとなる。'
            }
            , 'LOGIN_PASSWORD': {
              'databaseComment': 'ログイン時に利用するパスワード。<br>本当は良くないが、Exampleなのでひとまず暗号化していない。'
            }
            , 'REMINDER_QUESTION': {
              'databaseComment': 'パスワードを忘れた際のリマインダ機能における質問の内容。'
            }
            , 'REMINDER_ANSWER': {
              'databaseComment': 'パスワードを忘れた際のリマインダ機能における質問の答え。'
            }
            , 'REMINDER_USE_COUNT': {
              'databaseComment': 'リマインダを利用した回数。<br>これが多いと忘れっぽい会員と言えるが、そんなことを知ってもしょうがない。'
            }
            , 'REGISTER_DATETIME': {
              'databaseComment': ''
            }
            , 'REGISTER_USER': {
              'databaseComment': ''
            }
            , 'UPDATE_DATETIME': {
              'databaseComment': ''
            }
            , 'UPDATE_USER': {
              'databaseComment': ''
            }
            , 'VERSION_NO': {
              'databaseComment': ''
            }
          }
        }
        , 'MEMBER_SERVICE': {
          'databaseComment': '会員のサービス情報（ポイントサービスなど）。<br>テストケースのために、あえて統一性を崩してユニーク制約経由の&nbsp;one-to-one&nbsp;を表現している。'
          , 'columns': {
            'MEMBER_SERVICE_ID': {
              'databaseComment': '独立した主キーとなるが、実質的に会員IDとは&nbsp;one-to-one&nbsp;である。'
            }
            , 'MEMBER_ID': {
              'databaseComment': '会員を参照するID。ユニークなので、会員とは&nbsp;one-to-one&nbsp;の関係に。'
            }
            , 'SERVICE_POINT_COUNT': {
              'databaseComment': '購入したら増えて使ったら減る。'
            }
            , 'SERVICE_RANK_CODE': {
              'databaseComment': 'どんなランクがあるのかドキドキですね。'
            }
            , 'REGISTER_DATETIME': {
              'databaseComment': ''
            }
            , 'REGISTER_USER': {
              'databaseComment': ''
            }
            , 'UPDATE_DATETIME': {
              'databaseComment': ''
            }
            , 'UPDATE_USER': {
              'databaseComment': ''
            }
            , 'VERSION_NO': {
              'databaseComment': ''
            }
          }
        }
        , 'MEMBER_STATUS': {
          'databaseComment': '会員のステータスを示す固定的なマスタテーブル。いわゆるテーブル区分値！<br>業務運用上で増えることはなく、増減するときはプログラム修正ともなうレベルの業務変更と考えられる。<br><br>こういった固定的なマスタテーブルには、更新日時などの共通カラムは定義していないが、業務上そういった情報を管理する必要性が低いという理由に加え、ExampleDBとして共通カラムでER図が埋め尽くされてしまい見づらくなるというところで割り切っている。実業務では統一的に定義することもある。'
          , 'columns': {
            'MEMBER_STATUS_CODE': {
              'databaseComment': '会員ステータスを識別するコード。<br>固定的なデータなので連番とか番号にはせず、データを直接見たときも人が直感的にわかるように、例えば&nbsp;"FML"&nbsp;とかの３桁のコード形式にしている。(3って何会員だっけ？とかの問答をやりたくないので)'
            }
            , 'MEMBER_STATUS_NAME': {
              'databaseComment': '表示用の名称。<br>国際化対応するときはもっと色々考える必要があるかと...ということで英語名カラムがないので、そのまま区分値メソッド名の一部としても利用される。'
            }
            , 'DESCRIPTION': {
              'databaseComment': '会員ステータスそれぞれの説明。<br>区分値の一つ一つの要素に気の利いた説明があるとディベロッパーがとても助かるので絶対に欲しい。'
            }
            , 'DISPLAY_ORDER': {
              'databaseComment': 'UI上のステータスの表示順を示すNO。<br>並べるときは、このカラムに対して昇順のソート条件にする。'
            }
          }
        }
        , 'MEMBER_WITHDRAWAL': {
          'databaseComment': '退会会員の退会に関する詳細な情報。<br>退会会員のみデータが存在し、"1&nbsp;:&nbsp;0..1"&nbsp;のパターンの&nbsp;one-to-one&nbsp;である。<br>共通カラムがあってバージョンNOがないパターン。<br>基本的に更新は入らないが、重要なデータなので万が一のために更新系の共通カラムも。'
          , 'columns': {
            'MEMBER_ID': {
              'databaseComment': ''
            }
            , 'WITHDRAWAL_REASON_CODE': {
              'databaseComment': '定型的な退会した理由を参照するコード。<br>何も言わずに退会する会員もいるので必須項目ではない。'
            }
            , 'WITHDRAWAL_REASON_INPUT_TEXT': {
              'databaseComment': '会員がフリーテキストで入力できる退会理由。<br>もう言いたいこと言ってもらう感じ。サイト運営側としてはこういうのは真摯に受け止めて改善していきたいところ。'
            }
            , 'WITHDRAWAL_DATETIME': {
              'databaseComment': '退会した瞬間の日時。<br>正式会員日時と違い、こっちは&nbsp;one-to-one&nbsp;の別テーブルで管理されている。'
            }
            , 'REGISTER_DATETIME': {
              'databaseComment': ''
            }
            , 'REGISTER_USER': {
              'databaseComment': ''
            }
            , 'UPDATE_DATETIME': {
              'databaseComment': ''
            }
            , 'UPDATE_USER': {
              'databaseComment': ''
            }
          }
        }
        , 'PRODUCT': {
          'databaseComment': ''
          , 'columns': {
            'PRODUCT_ID': {
              'databaseComment': ''
            }
            , 'PRODUCT_NAME': {
              'databaseComment': 'ExampleDBとして、コメントの少ないケースを表現するため、あえてコメントを控えている。<br>実業務ではしっかりとコメントを入れることが強く強く推奨される。「よりによってこのテーブルでやらないでよ！」あわわ、何も聞こえません〜'
            }
            , 'PRODUCT_HANDLE_CODE': {
              'databaseComment': 'これだけは書いておこう、商品を識別する業務上のコード。よく品番とか言うかもしれませんねぇ...'
            }
            , 'PRODUCT_CATEGORY_CODE': {
              'databaseComment': ''
            }
            , 'PRODUCT_STATUS_CODE': {
              'databaseComment': ''
            }
            , 'REGULAR_PRICE': {
              'databaseComment': ''
            }
            , 'REGISTER_DATETIME': {
              'databaseComment': ''
            }
            , 'REGISTER_USER': {
              'databaseComment': ''
            }
            , 'UPDATE_DATETIME': {
              'databaseComment': ''
            }
            , 'UPDATE_USER': {
              'databaseComment': ''
            }
            , 'VERSION_NO': {
              'databaseComment': ''
            }
          }
        }
        , 'PRODUCT_CATEGORY': {
          'databaseComment': '商品のカテゴリを表現するマスタ。自己参照FKの階層になっている。'
          , 'columns': {
            'PRODUCT_CATEGORY_CODE': {
              'databaseComment': '自分のテーブルの別のレコードからも参照される。'
            }
            , 'PRODUCT_CATEGORY_NAME': {
              'databaseComment': ''
            }
            , 'PARENT_CATEGORY_CODE': {
              'databaseComment': '最上位の場合はデータなし。まさひく自己参照FKカラム！'
            }
          }
        }
        , 'PRODUCT_STATUS': {
          'databaseComment': '商品のステータスを表現する固定的なマスタ。'
          , 'columns': {
            'PRODUCT_STATUS_CODE': {
              'databaseComment': '商品ステータスを識別するコード。'
            }
            , 'PRODUCT_STATUS_NAME': {
              'databaseComment': '表示用の名称、英語名カラムがないのでそのままメソッド名の一部としても利用される。'
            }
            , 'DISPLAY_ORDER': {
              'databaseComment': 'もう、ご想像の通りです。'
            }
          }
        }
        , 'PURCHASE': {
          'databaseComment': '一つの商品に対する購入を表現する(購入履歴とも言える)。<br>実業務であれば購入詳細というテーブルを作り、「購入という行為」と「その中身（詳細）」を違う粒度のデータとしてそれぞれ管理するのが一般的と言えるでしょう。というか、注文とか請求とかそういうことを考え始めたらもっと複雑になるはずですが、ExampleDBということで割り切っています。'
          , 'columns': {
            'PURCHASE_ID': {
              'databaseComment': ''
            }
            , 'MEMBER_ID': {
              'databaseComment': '会員を参照するID。<br>購入を識別する自然キー(複合ユニーク制約)の筆頭要素。'
            }
            , 'PRODUCT_ID': {
              'databaseComment': 'あなたは何を買ったのか？'
            }
            , 'PURCHASE_DATETIME': {
              'databaseComment': '購入した瞬間の日時。'
            }
            , 'PURCHASE_COUNT': {
              'databaseComment': '購入した商品の一回の購入における数量。'
            }
            , 'PURCHASE_PRICE': {
              'databaseComment': '購入によって実際に会員が支払った（支払う予定の）価格。<br>基本は商品の定価に購入数量を掛けたものになるが、ポイント利用や割引があったりと必ずしもそうはならない。'
            }
            , 'PAYMENT_COMPLETE_FLG': {
              'databaseComment': 'この購入に関しての支払いが完了しているか否か。'
            }
            , 'REGISTER_DATETIME': {
              'databaseComment': ''
            }
            , 'REGISTER_USER': {
              'databaseComment': ''
            }
            , 'UPDATE_DATETIME': {
              'databaseComment': ''
            }
            , 'UPDATE_USER': {
              'databaseComment': ''
            }
            , 'VERSION_NO': {
              'databaseComment': ''
            }
          }
        }
        , 'PURCHASE_PAYMENT': {
          'databaseComment': '購入に対する支払。<br>分割払いもできるのでmanyとなり、会員からの孫テーブルのテストができてうれしい。'
          , 'columns': {
            'PURCHASE_PAYMENT_ID': {
              'databaseComment': '連番'
            }
            , 'PURCHASE_ID': {
              'databaseComment': '支払い対象の購入へのID'
            }
            , 'PAYMENT_AMOUNT': {
              'databaseComment': '支払った金額。さて、小数点なのはなぜでしょう？'
            }
            , 'PAYMENT_DATETIME': {
              'databaseComment': '支払ったときの日時'
            }
            , 'PAYMENT_METHOD_CODE': {
              'databaseComment': '手渡しや銀行振込など'
            }
            , 'REGISTER_DATETIME': {
              'databaseComment': ''
            }
            , 'REGISTER_USER': {
              'databaseComment': ''
            }
            , 'UPDATE_DATETIME': {
              'databaseComment': ''
            }
            , 'UPDATE_USER': {
              'databaseComment': ''
            }
          }
        }
        , 'REGION': {
          'databaseComment': '主に会員の住所に対応する漠然とした地域。<br>かなりざっくりした感じではある。唯一の業務的one-to-oneの親テーブルのケース。'
          , 'columns': {
            'REGION_ID': {
              'databaseComment': '地域をしっかりと識別するID。<br>珍しく(固定的な)マスタテーブルとしては数値だが、Exampleなのでやはり色々なパターンがないとね、ってところで。'
            }
            , 'REGION_NAME': {
              'databaseComment': '地域を漠然と表す名称。'
            }
          }
        }
        , 'SERVICE_RANK': {
          'databaseComment': '会員のサービスレベルを表現するランク。(ゴールドとかプラチナとか)'
          , 'columns': {
            'SERVICE_RANK_CODE': {
              'databaseComment': 'サービスランクを識別するコード。'
            }
            , 'SERVICE_RANK_NAME': {
              'databaseComment': 'サービスランクの名称。<br>ゴールドとかプラチナとか基本的には威厳のある名前'
            }
            , 'SERVICE_POINT_INCIDENCE': {
              'databaseComment': '購入ごとのサービスポイントの発生率。<br>購入価格にこの値をかけた数が発生ポイント。ExampleDBとして数少ない貴重な小数点ありのカラム。'
            }
            , 'NEW_ACCEPTABLE_FLG': {
              'databaseComment': 'このランクへの新規受け入れができるかどうか。'
            }
            , 'DESCRIPTION': {
              'databaseComment': 'ランクに関する業務的な説明。'
            }
            , 'DISPLAY_ORDER': {
              'databaseComment': 'UI上の表示順を表現する番号。'
            }
          }
        }
        , 'WITHDRAWAL_REASON': {
          'databaseComment': '会員に選ばせる定型的な退会理由のマスタ。そういえば、これ表示順カラムがないですねぇ...'
          , 'columns': {
            'WITHDRAWAL_REASON_CODE': {
              'databaseComment': ''
            }
            , 'WITHDRAWAL_REASON_TEXT': {
              'databaseComment': '退会理由の内容。<br>テキスト形式なので目いっぱい書けるが、そうするとUI側できれいに見せるのが大変でしょうね。'
            }
            , 'DISPLAY_ORDER': {
              'databaseComment': ''
            }
          }
        }
      }

      this.unmappedTableArea = new UnmappedTableArea();
      this.unmappedColumnArea = new UnmappedColumnArea();
    }

    StoreClient.prototype = {
      /**
       * Store pickup json to store
       * @param {Object} pickup - pickup response
       */
      storePickup: function (pickup) {
        var that = this;
        Array.prototype.forEach.call(pickup["tables"], function (table) {
          that.storePickupTable(table);
          var tableProperty = that.getTablePickup(table['tableName'])
          if (tableProperty.selectTargetHtmlElements().length === 0) {
            that.unmappedTableArea.push(table);
            return;
          }
          Array.prototype.forEach.call(table["columns"], function (column) {
            var columnProperty = that.getColumnPickup(table['tableName'], column['columnName'])
            if (!columnProperty.selectTargetHtmlElement()) {
              that.unmappedColumnArea.push(table, column);
              return;
            }
            that.storePickupColumn(table['tableName'], column);
          });
        });
      },

      /**
       * Store table
       * @param {Object} table - table object of pickup response
       */
      storePickupTable: function (table) {
        // init if not exists
        var tableName = table['tableName'];
        if (this.pickupStore[tableName] === undefined) {
          this.pickupStore[tableName] = {};
        }

        // return if not have properties
        var properties = table['properties'];
        if (properties.length === 0) {
          return;
        }

        // get database comment
        var tableMap = this.pickupStore[tableName];
        var databaseComment = tableMap['databaseComment'];

        // setup properties to store
        var isConflict = properties.length > 1;
        var isDatabaseCommentConflict = false;
        var decomments = [];
        var previousPieces = [];
        var authors = [];
        var commentVersion = 0;
        var that = this;
        Array.prototype.forEach.call(properties, function (property) {
          if (property['databaseComment'] != null && databaseComment != null && !isDatabaseCommentConflict) {
            isDatabaseCommentConflict = DecommentUtil.escapeNewlineCharacter(databaseComment) != DecommentUtil.escapeNewlineCharacter(property['databaseComment']);
          }
          var decomment = {
            "body": property["decomment"],
            "pieceGitBranch": property["pieceGitBranch"]
          }
          decomments.push(decomment);
          if (property['pieceCode'] != null) {
            previousPieces.push(property['pieceCode']);
          }
          authors = authors.concat(property['authors']);
          if (commentVersion < property['commentVersion']) {
            commentVersion = property['commentVersion'];
          }
        });
        authors = authors.filter(function (x, i, self) {
          return self.indexOf(x) === i;
        });

        tableMap['isConflict'] = isConflict || isDatabaseCommentConflict;
        tableMap['isDatabaseCommentConflict'] = isDatabaseCommentConflict;
        tableMap['decomments'] = decomments;
        tableMap['previousPieces'] = previousPieces;
        tableMap['authors'] = authors;
        tableMap['commentVersion'] = commentVersion;
      },

      /**
       * Store column
       * @param {string} tableDbName - table db name
       * @param {Object} column - column object of pickup response
       */
      storePickupColumn: function (tableDbName, column) {
        var columnName = column['columnName'];
        // init if not exists
        if (this.pickupStore[tableDbName]['columns'] === undefined) {
          this.pickupStore[tableDbName]['columns'] = {};
        }

        if (this.pickupStore[tableDbName]['columns'][columnName] === undefined) {
          this.pickupStore[tableDbName]['columns'][columnName] = {};
        }

        // return if not have properties
        var properties = column['properties'];
        if (properties.length == 0) {
          return;
        }

        // get database comment
        var columnMap = this.pickupStore[tableDbName]['columns'][columnName];
        var databaseComment = columnMap['databaseComment'];

        // setup properties to store
        var isConflict = properties.length > 1;
        var isDatabaseCommentConflict = false;
        var decomments = [];
        var previousPieces = [];
        var authors = [];
        var commentVersion = 0;
        var that = this;
        Array.prototype.forEach.call(properties, function (property) {
          if (property['databaseComment'] != null && databaseComment != null && !isDatabaseCommentConflict) {
            isDatabaseCommentConflict = DecommentUtil.escapeNewlineCharacter(databaseComment) != DecommentUtil.escapeNewlineCharacter(property['databaseComment']);
          }
          var decomment = {
            "body": property["decomment"],
            "pieceGitBranch": property["pieceGitBranch"]
          }
          decomments.push(decomment);
          if (property['pieceCode'] != null) {
            previousPieces.push(property['pieceCode']);
          }
          authors = authors.concat(property['authors']);
          if (commentVersion < property['commentVersion']) {
            commentVersion = property['commentVersion'];
          }
        });
        authors = authors.filter(function (x, i, self) {
          return self.indexOf(x) === i;
        });

        columnMap['isConflict'] = isConflict || isDatabaseCommentConflict;
        columnMap['isDatabaseCommentConflict'] = isDatabaseCommentConflict;
        columnMap['decomments'] = decomments;
        columnMap['previousPieces'] = previousPieces;
        columnMap['authors'] = authors;
        columnMap['commentVersion'] = commentVersion;
      },

      /**
       * Get decomments
       * @returns {Object} pickup
       */
      getDecomments: function () {
        var pickup = this.pickupStore;
        var result = [];
        for (key in pickup) {
          result.push(new PickupTableProperty(key, pickup[key]));
        }
        return result;
      },

      /**
       * Get table pickup
       * @returns {Object} table pickup
       */
      getTablePickup: function (tableName) {
        return new PickupTableProperty(tableName, this.pickupStore[tableName]);
      },

      /**
       * Get column pickup
       * @returns {Object} column pickup
       */
      getColumnPickup: function (tableName, columnName) {
        var table = this.getTablePickup(tableName);
        if (!table) {
          return null;
        }
        return new PickupColumnProperty(tableName, columnName, table.columns[columnName])
      }
    }

    function PickupTableProperty(tableDbName, json) {
      this.tableDbName = tableDbName;
      this.inputAuthor = null; // use when decomment server mode.
      if (json) {
        this.databaseComment = json.databaseComment;
        this.isDatabaseCommentConflict = json.isDatabaseCommentConflict;
        this.decomments = json.decomments || [];
        this.previousPieces = json.previousPieces;
        this.authors = json.authors;
        this.commentVersion = json.commentVersion;
        this.columns = {};
        var columns = json.columns || {};
        for (var key in columns) {
          this.columns[key] = new PickupColumnProperty(tableDbName, key, columns[key]);
        }
      }
    }

    PickupTableProperty.prototype = {

      /**
       * Reflect new comment to html
       */
      reflectToHtml: function () {
        if (this.notChangeDisplayComment()) {
          return;
        }
        var author = this.authors.join(',');
        var comment = this.buildDisplayComment() + "\n<span>@author(" + author + ")</span>";
        var that = this;
        Array.prototype.forEach.call(this.selectTargetHtmlElements(), function (element) {
          element.innerHTML = comment;
          if (that.isConflict()) {
            element.className += " commentcellerror"
          }
        });
      },

      /**
       * Convert to dialog title
       * @returns {string} dialog title
       */
      toDialogTitle: function () {
        return this.isConflict() ? this.tableDbName + " ... but now in CONFLICT!" : this.tableDbName;
      },

      /**
       * Check change display comment;
       */
      notChangeDisplayComment: function () {
        return this.decomments.length == 0 && !this.isConflict();
      },

      /**
       * Build display comment to html
       * @return {string} comment
       */
      buildDisplayComment: function () {
        var displayComment = "";
        if (this.isDatabaseCommentConflict) {
          displayComment = this.getEscapedDatabaseComment();
          displayComment = displayComment + '\n(from database comment)\n\n=======\n\n';
        }

        var commentCount = this.decomments.length;
        for (key in this.decomments) {
          var decomment = this.decomments[key];
          displayComment += decomment.body
          if (this.isConflict() && decomment.pieceGitBranch) {
            displayComment += '\n=======' + decomment.pieceGitBranch;
            if (key < commentCount - 1) {
              displayComment += '\n\n'; // show between comments
            }
          } else {
            if (key < commentCount - 1) {
              displayComment += '\n\n=======\n\n'; // show between comments
            }
          }
        }
        return displayComment;
      },

      /**
       * Get escaped database comment
       * @return {string} escaped database comment
       */
      getEscapedDatabaseComment: function () {
        var escapedComment = "";
        escapedComment = DecommentUtil.escapeNewlineCharacter(escapedComment);
        return escapedComment;
      },

      /**
       * Select target html element
       * @return {Array} html elements
       */
      selectTargetHtmlElements: function () {
        var className = this.tableDbName + "_" + "comment";
        var tableElements = document.getElementsByClassName(className);
        var result = [];
        Array.prototype.forEach.call(tableElements, function (element) {
          var target = element.querySelector('pre')
          if (target) {
            result.push(target);
          }
        });
        return result;
      },

      /**
       * Get display html comment
       * @return {string} display html comment
       */
      getDisplayHtmlComment: function () {
        var child = this.selectTargetHtmlElements()[0].childNodes[0];
        if (child != null && child.nodeName === "#text") {
          return child.nodeValue.trim();
        }
        return ""
      },

      /**
       * Check conflict
       * @return {boolean} true: conflict, false: not
       */
      isConflict: function () {
        return this.decomments.length > 1 || this.isDatabaseCommentConflict;
      },

      /**
       * Convert to request params
       * @return {Object} request params
       */
      toRequestParams: function () {
        return {
          'tableName': this.tableDbName,
          'columnName': null,
          'targetType': 'TABLE',
          'decomment': (this.decomments[0] || {}).body,
          'databaseComment': DecommentUtil.escapeNewlineCharacter(this.databaseComment),
          'commentVersion': this.commentVersion || 0,
          'inputAuthor': this.inputAuthor,
          'authors': this.authors || [],
          'previousPieces': this.previousPieces || []
        };
      }
    };

    function PickupColumnProperty(tableDbName, columnName, json) {
      this.tableDbName = tableDbName;
      this.columnName = columnName;
      this.inputAuthor = null; // use when decomment server mode.
      if (json) {
        this.databaseComment = json['databaseComment'];
        this.isDatabaseCommentConflict = json['isDatabaseCommentConflict'];
        this.decomments = json['decomments'] || [];
        this.previousPieces = json['previousPieces'];
        this.authors = json['authors'];
        this.commentVersion = json['commentVersion'];
        this.previousWholeComment = json['previousWholeComment'];
      }
    }

    PickupColumnProperty.prototype = {

      /**
       * Reflect new comment to html
       */
      reflectToHtml: function () {
        if (this.notChangeDisplayComment()) {
          return;
        }
        var author = this.authors.join(',');
        var comment = this.buildDisplayComment() + "\n<span>@author(" + author + ")</span>";
        var element = this.selectTargetHtmlElement();
        if (!element) {
          return
        }
        element.innerHTML = comment;
        if (this.isConflict()) {
          element.className += " commentcellerror"
        }
      },

      /**
       * Convert to dialog title
       * @returns {string} dialog title
       */
      toDialogTitle: function () {
        var name = this.tableDbName + "." + this.columnName;
        return this.isConflict() ? name + " ... but now in CONFLICT!" : name;
      },

      /**
       * Check change display comment;
       */
      notChangeDisplayComment: function () {
        return this.decomments.length == 0 && !this.isConflict();
      },

      /**
       * Build display comment to html
       * @return {string} comment
       */
      buildDisplayComment: function () {
        var displayComment = "";
        if (this.isDatabaseCommentConflict) {
          displayComment = this.getEscapedDatabaseComment();
          displayComment = displayComment + '\n(from database comment)\n\n=======\n\n';
        }

        var commentCount = this.decomments.length;
        for (key in this.decomments) {
          var decomment = this.decomments[key];
          displayComment += decomment.body
          if (this.isConflict() && decomment.pieceGitBranch) {
            displayComment += '\n=======' + decomment.pieceGitBranch;
            if (key < commentCount - 1) {
              displayComment += '\n\n'; // show between comments
            }
          } else {
            if (key < commentCount - 1) {
              displayComment += '\n\n=======\n\n'; // show between comments
            }
          }
        }
        return displayComment;
      },

      /**
       * Get escaped database comment
       * @return {string} escaped database comment
       */
      getEscapedDatabaseComment: function () {
        var escapedComment = "";
        escapedComment = DecommentUtil.escapeNewlineCharacter(escapedComment);
        return escapedComment;
      },

      /**
       * Select target html element
       * @return {Object} html element
       */
      selectTargetHtmlElement: function () {
        var columnId = this.tableDbName + "_" + this.columnName;
        columnId = columnId.toLowerCase();
        var columnElement = document.getElementById(columnId);
        if (columnElement === null) {
          return null;
        }
        return columnElement.parentElement.querySelector('.commentcell').querySelector('pre')
      },

      /**
       * Get display html comment
       * @return {string} display html comment
       */
      getDisplayHtmlComment: function () {
        var child = this.selectTargetHtmlElement().childNodes[0];
        if (child != null && child.nodeName === "#text") {
          return child.nodeValue.trim();
        }
        return ""
      },

      /**
       * Check conflict
       * @return {boolean} true: conflict, false: not
       */
      isConflict: function () {
        return this.decomments.length > 1 || this.isDatabaseCommentConflict;
      },

      /**
       * Convert to request params
       * @return {Object} request params
       */
      toRequestParams: function () {
        return {
          'tableName': this.tableDbName,
          'columnName': this.columnName,
          'targetType': 'COLUMN',
          'decomment': (this.decomments[0] || {}).body,
          'databaseComment': DecommentUtil.escapeNewlineCharacter(this.databaseComment),
          'commentVersion': this.commentVersion || 0,
          'inputAuthor': this.inputAuthor,
          'authors': this.authors || [],
          'previousPieces': this.previousPieces || []
        };
      }
    };

    /**
     * @author deco
     * @author cabos
     */
    function Decomment() {
      this.storeClient = new StoreClient()
    }
    Decomment.prototype = {

      /**
       * init
       */
      init: function () {
        if (document.getElementById("intro_opening") !== null) {
          this.fetchVirtualPickup();
          this.setupKeyDownEvent();
          this.showUserNameInputIfNeed();
        } else {
          this.reflectEmbeddedPickup();
        }
      },

      /**
       * Fetch virtual pickup from server
       */
      fetchVirtualPickup: function () {
        var that = this;
        new ApiClient().fetchDecomment(function (response) {
          var decomment = JSON.parse(response);
          that.reflectPickup(decomment);
          that.setupSaveDecomment();
        })
      },

      /**
       * Show user name input when decomment server mode.
       */
      showUserNameInputIfNeed: function () {
        if (DecommentUtil.isDecommentServer() && this.isUserNameEmpty()) {
          document.querySelector('#decomment-user-input').style.display = 'block';
        }
      },

      hideUserNameInput: function () {
        document.querySelector('#decomment-user-input').style.display = 'none';
      },

      /**
       * Reflect embedded pick
       */
      reflectEmbeddedPickup: function () {
        this.reflectPickup(this.storeClient.embeddedPickup);
      },

      /**
       * Reflect pickup
       * @param {Object} decomment - Decomment object
       */
      reflectPickup: function (decomment) {
        var that = this;
        this.storeClient.unmappedTableArea.clear();
        this.storeClient.unmappedColumnArea.clear();
        this.storeClient.storePickup(decomment);
        var pickup = this.storeClient.getDecomments()
        Array.prototype.forEach.call(pickup, function (table) {
          table.reflectToHtml();
          for (var key in table.columns) {
            var column = table.columns[key]
            column.reflectToHtml();
          }
        });
        this.storeClient.unmappedTableArea.reflect();
        this.storeClient.unmappedColumnArea.reflect();
      },

      /**
       * Setup save decomment event
       * @param {string} table - Table name
       */
      setupSaveDecomment: function (schemeName) {
        this.setupSaveTableComment();
        this.setupSaveColumnComment();
      },

      /**
       * Setup save table comment event
       */
      setupSaveTableComment: function () {
        var that = this;
        var tableList = document.getElementById('table-list-body').querySelectorAll('tr');
        Array.prototype.forEach.call(tableList, function (table) {
          var tableName = table.querySelector('.namecell').getAttribute('data-name');
          var commentElement = table.querySelector('.commentcell');
          that.setupSaveTableClickEvent(tableName, commentElement);
        });
        var commentTables = document.querySelectorAll('.tablecomment')
        Array.prototype.forEach.call(commentTables, function (tableElement) {
          var tableName = tableElement.getAttribute('data-name');
          that.setupSaveTableClickEvent(tableName, tableElement);
        });
      },

      /**
       * Setup save table comment click event to html
       * @param {string} tableName - Table name
       * @param {Object} commentElement - Comment element
       */
      setupSaveTableClickEvent: function (tableName, commentElement) {
        var tableProperty = this.storeClient.getTablePickup(tableName) || new PickupTableProperty(tableName, null)
        commentElement.onclick = this.createSaveDecommentFunction(tableProperty);
      },

      /**
       * Setup save column comment event
       */
      setupSaveColumnComment: function () {
        var tables = document.getElementsByClassName('tablecontent');
        var that = this;
        Array.prototype.forEach.call(tables, function (table) {
          var columns = table.getElementsByTagName('tr');
          Array.prototype.forEach.call(columns, function (column, index) {
            if (index === 0) { // because table header
              return
            }

            var commentElement = column.querySelector('.commentcell');
            var tableName = that.getTableNameFromElement(table);
            var columnName = column.querySelector('.columnnamecell').innerText.trim();
            var columnProperty = that.storeClient.getColumnPickup(tableName, columnName) || new PickupTableProperty(tableName, columnName)
            commentElement.onclick = that.createSaveDecommentFunction(columnProperty);
          });
        });
      },

      /**
         * Create save decomment function
       * param {object} commentProperty - Comment property
       * returns {function} Save decomment function
       */
      createSaveDecommentFunction: function (commentProperty) {
        var that = this;
        return function () {
          var modalElement = document.getElementById("decomment-modal");
          modalElement.style.display = "block";

          document.getElementById("decomment-modal-column-info").innerText = commentProperty.toDialogTitle();

          var inputElement = document.getElementById("decomment-input");
          var previousWholeComment = commentProperty.getDisplayHtmlComment();
          inputElement.value = previousWholeComment;
          inputElement.focus();

          document.getElementById("decomment-close").onclick = function () {
            modalElement.style.display = "none";
          };

          document.getElementById("decomment-ok").onclick = function () {
            var decomment = inputElement.value;
            if (DecommentUtil.isDecommentServer() && that.isUserNameEmpty()) {
              alert('Input your user name.');
              return;
            }
            if (that.isStillConflicting(decomment)) {
              alert('Still conflicting. please resolve.')
              return;
            }
            if (!that.isCommentChanged(previousWholeComment, decomment)) {
              modalElement.style.display = "none";
              return;
            }
            decomment = DecommentUtil.escapeInputText(decomment);
            decomment = DecommentUtil.deleteUnnecessaryWhitespace(decomment);
            commentProperty.decomments = [{ 'body': decomment }]
            commentProperty.inputAuthor = that.getUserName();
            var params = commentProperty.toRequestParams()
            new ApiClient().saveDecomment(params, function () {
              that.fetchVirtualPickup();
              that.hideUserNameInput();
            });
            modalElement.style.display = "none";
          };

          window.onclick = function (event) {
            if (event.target == modalElement) {
              modalElement.style.display = "none";
            }
          };
        };
      },

      /**
       * Get user name. and save to cookie if not saved.
       */
      getUserName: function () {
        var savedUserName = this.getCookie('decomment-user-name');
        if (savedUserName) {
          return savedUserName;
        }
        var inputUserName = document.querySelector('#decomment-user-name').value;
        if (inputUserName && inputUserName.length > 0) {
          document.cookie = "decomment-user-name=" + inputUserName + ";expires=2147483647";
        }
        return inputUserName;
      },

      /**
       * Check user name is inputed.
       */
      isUserNameEmpty: function () {
        return this.getCookie('decomment-user-name') === null && this.getUserName().length === 0;
      },

      /**
       * Get cookie from key
       */
      getCookie: function (key) {
        var cookies = document.cookie.split('; ');
        for (var i = 0; i < cookies.length; i++) {
          var c = cookies[i].split('=');
          if (c[0] === key) {
            return c[1];
          }
        }
        return null;
      },

      /**
       * Setup key down event
       */
      setupKeyDownEvent: function () {
        document.onkeydown = function (e) {
          // ESC
          if (e.keyCode == 27) {
            var modalElement = document.getElementById("decomment-modal");
            modalElement.style.display = "none";
          }
        }
      },

      /**
       * Get table name
       * @param {Object} table - Table element
       * @returns {string} table name
       */
      getTableNameFromElement: function (table) {
        var previousElement = table.previousElementSibling;
        return previousElement.value;
      },

      /**
       * Check still conflicting
       * @param {string} decomment - decomment
       * @returns {Boolean} is still conflicting
       */
      isStillConflicting: function (decomment) {
        return decomment.includes('=======');
      },

      /**
       * Check new decomment and previous comment is different
       * @param {string} tableName - Table name
       * @param {string} columnName - Column name
       * @param {string} decomment - decomment
       * @returns {Boolean} is changed
       */
      isCommentChanged: function (previousWholeComment, decomment) {
        if (previousWholeComment) {
          return previousWholeComment.trim() !== decomment.trim();
        }
        return decomment.trim().length != 0;
      }
    };

    /**
     * @author cabos
     */
    function UnmappedTableRow() {
    }
    UnmappedTableRow.prototype = {

      /**
       * Initialize unmapped table row
       * @param {number} row number
       * @param {object} table
       */
      init: function (rowNum, table) {
        this.rowNum = rowNum;
        this.tableName = table.tableName;
        this.mappedTableNameList = Array.prototype.map.call(table.mappings, function (mapping) {
          return mapping.newTableName;
        });
        this.previousMappingList = Array.prototype.map.call(table.mappings, function (mapping) {
          return mapping.mappingCode;
        });
        this.authorList = Array.prototype.map.call(table.mappings, function (mapping) {
          return mapping.mappingOwner;
        });
      },

      /**
       * Convert unmapped table row to string
       * @returns {string} Unmapped table row
       */
      toDisplayHtmlString: function () {
        return '<tr id="unmapped-table-row-' + this.tableName + '">'
          + '<td class="rownumcell">' + this.rowNum + '</td>'
          + '<td class="namecell">' + this.tableName + '</td>'
          + '<td class="namecell tableconflictcell">' + this.toConflictDisplayHtmlString() + '</td>'
          + '<td class="tableselectorcell">' + '</td>'
          + '</tr>';
      },

      toConflictDisplayHtmlString: function () {
        return Array.prototype.reduce.call(this.mappedTableNameList, function (currentStrs, name) {
          if (currentStrs.length === 0) {
            return name;
          }
          return currentStrs + "<br>" + name;
        }, '');
      },

      isTableNameConflict: function () {
        return this.previousMappingList.length >= 2;
      }
    }

    /**
     * @author cabos
     */
    function UnmappedTableArea() {
      this.rows = [];
    }
    UnmappedTableArea.prototype = {

      /**
       * Push unmapped table
       */
      push: function (table) {
        var row = new UnmappedTableRow();
        row.init(this.rows.length + 1, table);
        this.rows.push(row);
      },

      /**
       * Activate unmapped table field
       */
      activate: function () {
        if (document.getElementById("intro_opening") === null) {
          return;
        }

        var unmappedElements = document.getElementById('unmapped-tables');
        unmappedElements.style.display = 'inline';
        var that = this;
        document.getElementById('table-mapping-submit-button').onclick = function () {
          that.postMappingTable();
        };
      },

      /**
       * Clear unmapped table field
       */
      clear: function () {
        var tbody = this.getTableBodyElement();
        tbody.innerHTML = '';
        this.rows = [];

        var unmappedElements = document.getElementById('unmapped-tables');
        unmappedElements.style.display = 'none';
      },

      /**
       * Reflect unmapped table body
       */
      reflect: function () {
        if (this.rows.length === 0) {
          return;
        }

        this.activate();

        var tbody = this.getTableBodyElement();
        tbody.innerHTML += this.toDisplayHtmlString();
        this.showTableSelector();

        if (!this.isTableNameConflict()) {
          document.querySelector('#unmapped-table-head th.conflictcell').style.display = 'none';
          Array.prototype.forEach.call(document.getElementsByClassName('tableconflictcell'), function (cell) {
            cell.style.display = 'none'
          });
        }
      },

      isTableNameConflict: function () {
        return Array.prototype.some.call(this.rows, function (row) {
          return row.isTableNameConflict();
        });
      },

      /**
       * Show table selector
       *	<select>
       *		<option>TABLE_NAME1</option>
       *		<option>TABLE_NAME2</option>
       *		<option>TABLE_NAME3</option>
       *		...
       *	</select>
       * @returns {string} show table selector
       */
      showTableSelector: function () {
        var tableSelector = this.createTableSelector();
        var tableSelectorCellList = document.getElementsByClassName('tableselectorcell');
        Array.prototype.forEach.call(tableSelectorCellList, function (cell) {
          cell.innerHTML = tableSelector;
        });
      },

      /**
       * Create select list of table
       * @returns {string}
       */
      createTableSelector: function () {
        var tableNameList = this.getTableNameList();
        var options = Array.prototype.reduce.call(tableNameList, function (currentOptions, name) {
          return currentOptions + '<option>' + name + '</option>';
        }, '');
        return '<select>' + '<option>-</option>' + options + '</select>'
      },

      /**
       * Get data list
       * @returns {array} table name list
       */
      getTableNameList: function () {
        var trs = document.getElementById('table-list-body').getElementsByTagName('tr');
        var tableList = [];
        for (var i = 0, max = trs.length; i < max; i++) {
          tableList.push(trs[i].getElementsByTagName('td')[NAME_INDEX].innerText);
        }
        return tableList;
      },

      /**
       * Get Unmapped table body element
       * @returns {object} Unmapped table body element
       */
      getTableBodyElement: function () {
        return document.getElementById('unmapped-table-body');
      },

      /**
       * Convert to string
       * 	<tr>
       *		<td class="rownumcell">1</td>
       *		<td class="namecell">OLD_TABLE_NAME1</td>
       *		<td class="columnselectorcell">
       *		</td>
       *	</tr>
       * 	<tr>
       *		<td class="rownumcell">1</td>
       *		<td class="namecell">OLD_TABLE_NAME2</td>
       *		<td class="columnselectorcell">
       *		</td>
       *	</tr>
       *  ....
       * @returns {string} Unmapped table rows
       */
      toDisplayHtmlString: function () {
        return Array.prototype.reduce.call(this.rows, function (currentRows, row) {
          return currentRows + row.toDisplayHtmlString();
        }, '');
      },

      postMappingTable: function () {
        var mappings = Array.prototype.map.call(this.rows, function (row) {
          var newTableName = document.getElementById('unmapped-table-row-' + row.tableName).children[3].children[0].value;
          return {
            oldTableName: row.tableName,
            newTableName: newTableName,
            targetType: 'TABLE',
            authors: row.authorList,
            previousMappings: row.previousMappingList
          };
        });

        mappings = Array.prototype.filter.call(mappings, function (mapping) {
          return mapping.newTableName !== '-';
        });

        if (mappings.length === 0) {
          return;
        }

        var params = { mappings: mappings };
        var successCallback = function () {
          window.location.reload();
        };
        new ApiClient().postMapping(params, successCallback);
      },
    }

    /**
     * @author cabos
     */
    function UnmappedColumnRow() {
    }
    UnmappedColumnRow.prototype = {

      /**
       * Initialize unmapped column row
       * @param {number} Row number
       * @param {string} Old table name
       */
      init: function (rowNum, table, column) {
        this.rowNum = rowNum;
        this.tableName = table.tableName;
        this.oldColumnName = column.columnName;

        this.mappedColumnNameList = Array.prototype.map.call(column.mappings, function (mapping) {
          return mapping.newTableName + '.' + mapping.newColumnName;
        });
        this.previousMappingList = Array.prototype.map.call(column.mappings, function (mapping) {
          return mapping.mappingCode;
        });
        this.authorList = Array.prototype.map.call(column.mappings, function (mapping) {
          return mapping.mappingOwner;
        });
      },

      /**
       * Convert unmapped column row to string
       * @returns {string} Unmapped column row
       */
      toDisplayHtmlString: function () {
        return '<tr id="unmapped-column-row-' + this.oldColumnName + '">'
          + '<td class="rownumcell">' + this.rowNum + '</td>'
          + '<td class="namecell">' + this.tableName + '</td>'
          + '<td class="namecell">' + this.oldColumnName + '</td>'
          + '<td class="namecell columnconflictcell">' + this.toConflictDisplayHtmlString() + '</td>'
          + '<td id="columnselectorcell-' + this.tableName + '-' + this.oldColumnName + '">' + '</td>'
          + '</tr>';
      },

      toConflictDisplayHtmlString: function () {
        return Array.prototype.reduce.call(this.mappedColumnNameList, function (currentStrs, name) {
          if (currentStrs.length === 0) {
            return name;
          }
          return currentStrs + "<br>" + name;
        }, '');
      },

      isColumnNameConflict: function () {
        return this.previousMappingList.length >= 2;
      }
    }

    /**
     * @author cabos
     */
    function UnmappedColumnArea() {
      this.rows = [];
    }
    UnmappedColumnArea.prototype = {

      /**
       * Push unmapped column
       */
      push: function (table, column) {
        var row = new UnmappedColumnRow();
        row.init(this.rows.length + 1, table, column);
        this.rows.push(row);
      },

      /**
       * Activate unmapped column field
       */
      activate: function () {
        if (document.getElementById("intro_opening") === null) {
          return;
        }

        var unmappedElements = document.getElementById('unmapped-columns');
        unmappedElements.style.display = 'inline';
        var that = this;
        document.getElementById('column-mapping-submit-button').onclick = function () {
          that.postMappingColumn();
        };
      },

      /**
       * Clear unmapped column field
       */
      clear: function () {
        var tbody = this.getColumnBodyElement();
        this.rows = [];
        tbody.innerHTML = '';

        var unmappedElements = document.getElementById('unmapped-columns');
        unmappedElements.style.display = 'none';
      },

      /**
       * Reflect unmapped column field
       */
      reflect: function () {
        if (this.rows.length === 0) {
          return;
        }

        this.activate();

        var tbody = this.getColumnBodyElement();
        var that = this;
        Array.prototype.forEach.call(this.rows, function (row) {
          tbody.innerHTML += row.toDisplayHtmlString();
          that.displayColumnSelector(row.tableName, row.oldColumnName);
        });

        if (!this.isColumnNameConflict()) {
          document.querySelector('#unmapped-column-head th.conflictcell').style.display = 'none';
          Array.prototype.forEach.call(document.getElementsByClassName('columnconflictcell'), function (cell) {
            cell.style.display = 'none'
          });
        }
      },

      isColumnNameConflict: function () {
        return Array.prototype.some.call(this.rows, function (row) {
          return row.isColumnNameConflict();
        });
      },

      /**
       * Display column selector
       */
      displayColumnSelector: function (tableName, oldColumnName) {
        var columnSelector = this.createColumnSelector(tableName);
        var columnSelectorCell = document.getElementById('columnselectorcell-' + tableName + '-' + oldColumnName);
        columnSelectorCell.innerHTML = columnSelector;
      },

      /**
       * Create select list of column
       *	<select>
       *		<option>COLUMN_NAME1</option>
       *		<option>COLUMN_NAME2</option>
       *		<option>COLUMN_NAME3</option>
       *		...
       *	</select>
       * @returns {string} Column selector
       */
      createColumnSelector: function (tableName) {
        var columnNameList = this.getColumnNameList(tableName);
        var options = Array.prototype.reduce.call(columnNameList, function (currentOptions, name) {
          return currentOptions + '<option>' + name + '</option>';
        }, '');
        return '<select>' + '<option>-</option>' + options + '</select>'
      },

      /**
       * Get column name list by table name
       * @returns {array} column name list
       */
      getColumnNameList: function (tableName) {
        var trs = document.getElementById(tableName.toLowerCase() + '-body').getElementsByTagName('tr');
        var columnList = [];
        for (var i = 0, max = trs.length; i < max; i++) {
          // TODO check that column name column num is 6
          columnList.push(trs[i].getElementsByTagName('td')[7].innerText);
        }
        return columnList;
      },

      /**
       * Get Unmapped column body element
       * @returns {object} Unmapped column body element
       */
      getColumnBodyElement: function () {
        return document.getElementById('unmapped-column-body');
      },

      /**
       * Convert to string
       * 	<tr>
       *		<td class="rownumcell">1</td>
       *		<td class="namecell">TABLE_NAME1</td>
       *		<td class="namecell">OLD_COLUMN_NAME1</td>
       *		<td class="columnselectorcell">
       *		</td>
       *	</tr>
       * 	<tr>
       *		<td class="rownumcell">1</td>
       *		<td class="namecell">TABLE_NAME2</td>
       *		<td class="namecell">OLD_COLUMN_NAME2</td>
       *		<td class="columnselectorcell">
       *		</td>
       *	</tr>
       *	....
       *	@returns {string} Unmapped column rows
       */
      toDisplayHtmlString: function () {
        return Array.prototype.reduce.call(this.rows, function (currentRows, row) {
          return currentRows + row.toDisplayHtmlString();
        }, '');
      },

      postMappingColumn: function () {
        var mappings = Array.prototype.map.call(this.rows, function (row) {
          var tableName = row.tableName;
          var oldColumnName = row.oldColumnName;
          var selectorCellId = 'columnselectorcell-' + tableName + '-' + oldColumnName;
          var newColumnName = document.getElementById(selectorCellId).children[0].value;
          return {
            oldTableName: tableName,
            oldColumnName: oldColumnName,
            newTableName: tableName,
            newColumnName: newColumnName,
            targetType: 'COLUMN',
            authors: row.authorList,
            previousMappings: row.previousMappingList
          };
        });

        mappings = Array.prototype.filter.call(mappings, function (mapping) {
          return mapping.newColumnName !== '-';
        });

        if (mappings.length === 0) {
          return;
        }

        var params = { mappings: mappings };
        var successCallback = function () {
          window.location.reload();
        };
        new ApiClient().postMapping(params, successCallback);
      }
    }
    new Decomment().init();
  </script>

</body>

</html>
`
