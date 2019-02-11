var VERSION = 3.65;
var NAME = 'FormEmailer'; //used as menu and settings sheet name

var T = {
  sender: "Sender Name", replyTo: "Reply To", //please try to keep these first texts short
  to: "To", cc: "Cc", bcc: "Bcc",
  subject: "Subject", body: "Body", html: "html",
  
  fSheet: "Form sheet", fSheetDESC: "Name of the sheet that holds the form answers",
  qtt: "Qtt Emails", qttDESC: "Max quantity of emails sent per form submitted",
  qWarn: "Quota warning", qWarnDESC: "Daily quota threshold that will trigger a warning email",
  qLimit: "Quota limit", qLimitDESC: "Quota minimum value where FormEmailer will stop sending emails",
  fLoc: "Formulas location", fLocDESC: "Enter the location using the format: SheetName!A:B",
  closure: "Closure mode", closureDESC: "What the script should do after your formulas are evaluated",
  closureValues: "values", closureFormulas: "formulas", closureClear: "clear",
  quota: "Remaining quota", quotaDESC: "Amount of your daily quota you got left now",
  
  menuSettings: "Settings", menuManually: "Process manually", menuAbout: "About", menuFix: "Fix",
  version: "{1} - version {2}", //script name; version number
  about1: "Script developed by {1}", //my name
  about2: "Help, samples and tutorials can be found at", //site link will be in the line bellow
  
  statusEmail: "Email{1} sent", //email index (will be blank if there"s only one)
  statusNot: "Email{1} not sent", //email index
  statusError: "Error sending email{1}: {2}", //email index; error message
  mailError: "Error sending email{1} on line{3}: {2}", //email index; error message; line number
  statusQuota: "Quota limit reached",
  statusMissingField: "Field does not exist: {1}", //placeholder name
  statusFormattingErr: "Error formatting field: {1}", //full placeholder definition
  statusDateFormatErr: "Error formatting date field: {1}", //full placeholder definition
  
  manualQuestion: "Which line do you want process?\nAppend an * to the line number to process from it to the end",
  manualInvalid: "\"{1}\" is not a valid number. Aborting.", //value entered by user
  manual1stMult: "The first line is the n.2. I'll consider that you want to process from the beginning.",
  manual1stSingle: "The line number should be equal to or greater than 2.\nSince the 1st row is the header.",
  manualAfterLast: "The line number you typed is beyond the last one with data.",
  manualQuotaWarn: "Quota warning threshold reached! Continue anyway?",
  manualQuotaLimit: "Quota minimum limit reached\nProcess stopped at line {1}", //line number
  manualSuccessMulti: "All lines from {1} to {2} processed successfully", //1st line; last line
  manualSuccessSingle: "Line {1} processed successfully", //line number
  manualErrors: "There were some errors on the processing, check out the rows status",
  
  yes: "Yes", no: "No", ok: "Ok",
  title: "{1} Settings", //script name
  emailTab: "Email{1}", //tab index (may be empty if there's only one)
  advTab: "Advanced",
  advIntro: "You don't need to worry with these settings if you don't want to.",
  advTip1: "*You have to '{1}' and re-open to see the updates on any changes you make here.", //save and close
  advTip2: "Having doubts with these parameters? Want to learn more about {1}?", //script name
  advTip3: "Access the help site at", //site link bellow
  placeholders: "Answers placeholders:",
  addField: "Add field:",
  insertPlaceholder: "insert placeholder", //there will be an arrow in front of this
  saveAndClose: "Save and Close",
  
  sheetError: "{1} informed does not exist!", //'Form sheet' parameter name
  numberError: "{1} is not a valid number!", //parameter name
  formulasError: "Invalid {1}", //'formulas location' parameter name
  formulasSheetError: "Invalid sheet for {1}", //'formulas location' parameter name
  formulasColsError: "Invalid column reference for {1}", //'formulas location' parameter name
  errorTitle: "Error",
  badSettings: "Your data was not saved.",
  versionConflict: "Config version is {1}, but script's is {2}. They are not compatible.\n", //config version; script version
  resolveConflict: "You settings version \"{1}\", is not compatible with the script's version \"{2}\". Do you want to overwrite it new default settings?",  //config version; script version
  badConfig: "Your config is damaged or missing!\nDo you want to overwrite it with the default values?",
  badConfigCancel: "Nothing done.\nHere is the error message:\n{1}", //error message
  noProblem: 'There seem to be no problem with your settings.',
  missingSheet: "Unable to find sheet: {1}", //sheet name
  fSheetMissing: "Your \"{1}: {2}\" cannot be found, please choose a new one and click \"{3}\" to fix", //fSheet parameter name; fSheet parameter value; yes
  cancelMessage: "Canceled",
  errorReportSubject: "{1} errors report", //script name
  errorReportBody: "The following errors occurred on \"{1}\" spreadsheet:\n{2}", //spreadsheet name; errors
  alsoQuota: "Also, your quota is below the warning limit",
  quotaMailSubject: "{1} quota warning", //script name
  quotaMailBody: "Your actual quota is: {1}\nIt is bellow the warning threshold: {2}", //remaining quota; quota warning
  
  pickLanguage: "Select a language:",
  langIncomplete: "This language was written for an older version of the script and is probably incomplete.",
  pickSheet: "Select the sheet that has your form answers (or data to be merged):",
  install: "Install",
  overwrite: "Do you confirm you want to overwrite your whole \"{1}\" sheet?", //script name
  defaultBody: "Submitted values:",
  defaultSubject: "New form submitted",
  blankSheet: "Your \"{1}\" sheet is blank! Please create your form or basic data structure before installing, so the script can create nice defaults for you.", //sheet name
  statusColumn: "{1} Status", //script name
  relocateStatus: "In this new version of the script, the status column is the 1st instead of last. I have moved it for you, please verify.",
  statusComment: "This column must always be the first one",
  settingsComment: "Please do NOT modify this manually! Use the Settings interface",
  header: "{1}\nRunning automatically:\nYour settings are save here:", //script's name (this text must always have 3 lines)
  instructions: "Settings tips:\n"+ //'Form Sheet' parameter name
  "If you want to rename your form sheet, remember to rename the \"{1}\" parameter at the same time.\n"+
  "A very good practice is to have the first row of data with some bogus values so you can make some tests before running it on the whole data set.\n"+
  "The placeholders may be used in any field, e.g. To, Subject, etc.\n"+
  "The \"#\" character is used to delimit the placeholders' boundaries, if you want to use this char in any field, write it two times \"##\". They will be replace by only one.\n"+
  "You may provide formatting instructions in the placeholder by using the \"|\" char after the field name. Take a look at the available format in the help site.\n"+
  "http://sites.google.com/site/FormEmailer\n"+
  "\n"+
  "New install instructions:\n"+
  "You need to set up the trigger so the script can run automatically. Steps:\n"+
  "- Click the menu \"Tools\" > \"Script editor...\"\n"+
  "- In the editor's window\n"+
  "-- Make sure the {1} script is opened and selected (it normally is)\n"+
  "-- Click the menu \"Triggers\" > \"Current script's triggers...\"\n"+
  "--- Click the only link and set up a new trigger as follows:\n"+
  "timeDriven - Time-driven - Minutes timer - Every minute\n"+
  "--- Click save\n"+
  "-- You may close the editor\n"+
  "The status indication in this sheet (cell B2) may take some minutes to update."
};

var ef = 'sender,replyTo,to,cc,bcc,subject,body,html'.split(','); //email fields
var ap = 'fSheet,qtt,qWarn,qLimit,fLoc,closure,quota'.split(','); //advanced parameters
var s = {}; //settings
var c = {}; //current variables
var ddf = 'M/d/yyyy H:mm:ss'; //default date format
var nbs = unescape('%A0'); //non-breaking space

var _appSize = [760,480];

//css
var _emailField = {
  width: '480px',
  fontSize: '12px'
};
var _body = {
  height: '234px',
  minHeight: '234px', //to avoid resizable textArea of some browsers
  maxHeight: '234px',
  width: '100%',
  minWidth: '100%', 
  maxWidth: '100%' //this one does not work
};
var _placeHolders = {
  width: '230px',
  fontSize: '12px'
};
var _link = {
  color: 'blue',
  cursor: 'hand'
};
var _right = {
  width: '100%',
  textAlign: 'right'
};
var numParam = {
  width: '70px',
  textAlign: 'right'
};
var textParam = {
  width: '150px'
};

//This is the monitoring function. You should set up a time-driven trigger to run it.
function timeDriven(e) {
  if( e !== undefined )
    errorHandling_(monitor_,true);
  else
    monitor_(false);
}

function about() {
  if( !loadOrDefaults_() )
    return;
  var app = UiApp.createApplication().setTitle(repl_(T.version, NAME, VERSION)).setWidth(340).setHeight(100);
  app.add(app.createScrollPanel().setSize('340px', '100px').add(
    app.createVerticalPanel().setSpacing(3).setStyleAttribute('margin', '10px') .add(
      app.createLabel(repl_(T.about1, 'Henrique G. Abreu'))).add(
      app.createLabel(T.about2)).add(
      app.createAnchor('http://sites.google.com/site/formemailer', 'http://sites.google.com/site/formemailer'))));
  SpreadsheetApp.getActiveSpreadsheet().show(app);
}

function onOpen() {
  c.ss = c.ss || SpreadsheetApp.getActiveSpreadsheet();
  c.cs = c.cs || c.ss.getSheetByName(NAME);
  if( c.cs != null ) {
    try {
      loadConfig_();
      c.ss.removeMenu(NAME+' ERROR');
      c.ss.addMenu(NAME, [{name:T.menuSettings, functionName: 'settings'},
                          {name:T.menuManually, functionName: 'processManually'},
                          {name:T.menuAbout, functionName: 'about'}]);
    } catch(e) {
      c.ss.removeMenu(NAME);
      c.ss.addMenu(NAME+' ERROR', [{name:T.menuFix, functionName: 'fix'}])
    }
    checkTrigger_(false);
  } else //language pack will be available only after the install
    c.ss.addMenu(NAME, [{name:'Install', functionName: 'install'}]);
}

function onInstall() {
  onOpen();
}

function onEdit(e) {
  c.ss = e.source;
  c.cs = c.ss.getSheetByName(NAME);
  if( c.cs != null )
    checkTrigger_(false);
}

function monitor_(trigger) {
  loadConfig_();
  checkTrigger_(trigger);
  var last = c.fs.getLastRow();
  if( last == 1 )
    return null;
  var status = c.fs.getRange(2,1,last-1,1).getValues();
  for( var i = 0; i < status.length; i++ )
    if( status[i][0] === '' )
      doIt_(i+2);
}

function doIt_(line) {
  var raw = c.fs.getRange(line,2,1,c.size).getValues()[0];
  var answers = {};
  for( var i = 0; i < raw.length; i++ )
    answers[c.questions[i]] = raw[i];
  if( c.fl ) {
    var all = c.fl.getRange(line,c.fc[0],1,c.fc[1]);
    var values = all.setFormulasR1C1([c.formulas]).getValues()[0];
    for( var i = 0, j = c.fl === c.fs ? c.fc[0]-2 : raw.length; i < values.length; ++i, ++j )
      answers[c.questions[j]] = values[i];
  }
  var status = [];
  for( var i = 0; i < s.qtt; ++i ) {
    if( s.quota > s.qLimit ) {
      try {
        var email = {};
        var html = s['html'+i] == 'true';
        for( var j = 0; j < ef.length-1; ++j ) {
          var parts = s[ef[j]+i].split("#");
          email[ef[j]] = parts[0];
          for( var k = 1; k < parts.length; k+=2 )
            email[ef[j]] += (parts[k] != '' ? format_(answers,parts[k],status,html) : '#') + parts[k+1];
        }
        if( email.to == '' ) {
          status.push(repl_(T.statusNot, s.qtt == 1 ? '' : i+1));
          continue;
        }
        var args = {name:email.sender, cc:email.cc, bcc:email.bcc};
        if( html ) args.htmlBody = email.body;
        if( email.replyTo == 'noReply' ) args.noReply = true;
        else if( email.replyTo != '' ) args.replyTo = email.replyTo;
        MailApp.sendEmail(email.to, email.subject, html ? 'html' : email.body, args);
        status.push(repl_(T.statusEmail, s.qtt == 1 ? '' : i+1));
        var m = [email.cc != '' || email.bcc != '' ? ',' : '',
                 email.cc != '' && email.bcc != '' ? ',' : ''];
        s.quota -= (email.to + m[0] + email.cc + m[1] + email.bcc).
          replace(/"[^"]*"/g,'').split(/,/).length;
      } catch(e) {
        status.push(repl_(T.statusError, s.qtt == 1 ? '' : i+1, e));
        c.err.push(repl_(T.mailError, s.qtt == 1 ? '' : i+1, e, line));
      }
    } else {
      status.push(T.statusQuota);
      if( c.err.length == 0 || !startsWith_(c.err[c.err.length-1], T.statusQuota) )
        c.err.push(T.statusQuota+'. '+new Date());
      break;
    }
  }
  c.fs.getRange(line,1).setValue(status.join('; '));
  if( c.fl && line != 2 ) {
    if( s.closure === 'values' )
      all.setValues([values]);
    else if( s.closure === 'clear' )
      all.clearContent();
    //else formulas > just leave them there
  }
}

function format_(answers,part,status,html) {
  var t;
  if( answers[part] !== undefined ) {
    t = [part,''];
  } else {
    t = part.match(/^(.+)\|([^\|]*)$/);
    if( t == null || answers[t[1]] == null ) {
      status.push(repl_(T.statusMissingField, t == null ? part : t[1]));
      return '';
    }
    t = t.slice(1);
  }
  var v = answers[t[0]];
  try {
    if( t.length == 1 )
      t.push('');
    if( typeof(v) == 'object' ) {
      try {
        v = Utilities.formatDate(v, c.tz || (c.tz = c.ss.getSpreadsheetTimeZone()), t[1] == '' ? ddf : t[1]);
      } catch(e) {
        status.push(repl_(T.statusDateFormatErr, part));
        v = Utilities.formatDate(v, c.tz, ddf);
      }
    } else if( typeof(v) == 'number' && t[1] != '' && t[1] != 's' ) {
      var p = t[1].length-1;
      if( t[1].charAt(p) == '%' ) {
        v *= 100;
        p--;
      }
      if( t[1].charAt(p).match(/\d/) ) { //number of decimals
        v = v.toFixed(+t[1].charAt(p));
        p--;
      } else
        v = v.toString();
      var s = v.split('\.');
      var sep = t[1].charAt(p);
      p--;
      if( p >= 0 && t[1].charAt(p) != '(' ) { //thousands sep
        s[0] = s[0].split('').reverse().join('').match(/\d{1,3}/g).join(t[1].charAt(p)).split('').reverse().join('');
        p--;
      }
      if( v.charAt(0) == '-' ) {
        if( p >= 0 && t[1].charAt(p) == '(' ) {
          s[0] = '(' + s[0];
          s[1] = s[1] + ')';
        } else
          s[0] = '-' + s[0];
      }
      v = s.join(sep);
    } else {
      v = v.toString();      
      if( t[1] != '' && t[1].charAt(0) == 's' ) {
        if( t[1].charAt(1) == 'U' )
          v = v.toUpperCase();
        else if( t[1].charAt(1) == 'D' )
          v = v.toLowerCase();
        else if( t[1].charAt(1) == 'P' && v.length > 0 )
          v = v.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase()+txt.substr(1).toLowerCase();});
      }
      if( html && (t[1] == '' || t[1].charAt(1) != 'H') )
        v = v.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
    }
  } catch(e) {
    status.push(repl_(T.statusFormattingErr, part));
  }
  return v;
}

function processManually() {
  if( !loadOrDefaults_() )
    return;
  var v = showInput_(T.manualQuestion);
  if( v == 'cancel' )
    return null;
  var multi = false;
  if( v.charAt(v.length-1) == '*' ) {
    multi = true;
    v = v.substring(0,v.length-1);
  }
  var start = parseInt(v);
  var last = c.fs.getLastRow();
  if( isNaN(start) ) {
    return showMsg_(repl_(T.manualInvalid, v));
  } else if( start < 2 ) {
    if( multi ) {
      start = 2;
      showMsg_(T.manual1stMult);
    } else {
      return showMsg_(T.manual1stSingle);
    }
  } else if( start > last )
    return showMsg_(T.manualAfterLast);
  if( !multi )
    last = start;
  var cont = false;
  for( var line = start; line <= last; line++ ) {
    if( s.quota <= s.qLimit )
      return showMsg_(repl_(T.manualQuotaLimit, line));
    if( s.quota <= s.qWarn && !cont ) {
      cont = 'yes' == showMsg_(T.manualQuotaWarn, 'YES_NO');
      if( !cont )
        return null;
    }
    doIt_(line);
  }
  showMsg_(c.err.length == 0 ? repl_(last > start ? T.manualSuccessMult : T.manualSuccessSingle, start, last) : T.manualErrors);
}

function checkTrigger_(runningNow) {
  var state = runningNow || (new Date().getTime())-(+sget_('lastRun',0)) < 10*60*100; //10 min
  var r = c.cs.getRange('B2');
  if( r.getValue() != (state ? T.yes : T.no) ) {
    if( state )
      r.setValue(T.yes).setFontColor('#008000');
    else
      r.setValue(T.no).setFontColor('#993300');
  }
}

function settings() {
  if( !loadOrDefaults_() )
    return;
  var app = UiApp.createApplication().setTitle(repl_(T.title, NAME)).setWidth(_appSize[0]).setHeight(_appSize[1]);
  var tabPanel = app.createDecoratedTabPanel().setId('tabPanel');
  
  var handlers = {insert: app.createServerClickHandler('insertQuestion_').addCallbackElement(tabPanel),
                  link: app.createServerClickHandler('linkClick_'),
                  save: app.createServerClickHandler('save_').addCallbackElement(tabPanel)};
  var tabs = [];
  for( var i = 0; i < s.qtt; i++ )
    tabs.push(createEmailTab_(app,i,handlers));
  if( s.qtt == 1 )
    tabs[0].name = repl_(T.emailTab, '');
    
  var adv = app.createGrid(ap.length, 3);
  var x = 0;
  for(; x < ap.length-2; x++ )
    adv.setWidget(x, 0, createLabel_(app,T[ap[x]]+':')).
      setWidget(x, 1, createTextBox_(app,ap[x])).
      setWidget(x, 2, app.createLabel(T[ap[x]+'DESC']));
  var listBox = css_(app.createListBox().setName(ap[x]), {i:textParam, fontSize:_placeHolders.fontSize});
  var opts = [['formulas',T.closureFormulas], ['values',T.closureValues], ['clear',T.closureClear]];
  for( var i = 0; i < opts.length; ++i ) {
    listBox.addItem(opts[i][1], opts[i][0]);
    if( s[ap[x]] === opts[i][0] )
      listBox.setSelectedIndex(i);
  }
  adv.setWidget(x, 0, createLabel_(app,T[ap[x]]+':')).
    setWidget(x, 1, listBox).
    setWidget(x, 2, app.createLabel(T[ap[x]+'DESC']));
  x++;
  adv.setWidget(x, 0, createLabel_(app,T[ap[x]]+':')).
    setWidget(x, 1, createTextBox_(app,ap[x]).setEnabled(false)).
    setWidget(x, 2, app.createLabel(T[ap[x]+'DESC']));
  var save = app.createButton(T.saveAndClose).addClickHandler(handlers.save);
  tabs.push({name:T.advTab, tab:app.createVerticalPanel().setSpacing(10).add(
    app.createLabel(T.advIntro).setStyleAttribute('fontWeight', 'bold')).add(
    adv).add(
    app.createLabel(repl_(T.advTip1, T.saveAndClose))).add(
    app.createLabel(' ')).add(
    app.createLabel(repl_(T.advTip2, NAME))).add(
    app.createHorizontalPanel().add(
      app.createLabel(T.advTip3+nbs)).add(
      app.createAnchor('sites.google.com/site/FormEmailer', 'http://sites.google.com/site/formemailer'))).add(
    save).setCellHorizontalAlignment(save, UiApp.HorizontalAlignment.CENTER)});
  
  for( var i in tabs )
    tabPanel.add(tabs[i].tab.setSize('100%','100%'), tabs[i].name);
  tabPanel.selectTab(0).setAnimationEnabled(true);
  app.add(tabPanel.setSize('100%','100%'));
  c.ss.show(app);
}

function createEmailTab_(app,idx,h) {
  var questions = app.createListBox().setName('question'+idx);
  for( var i in c.questions )
    questions.addItem(c.questions[i]);
  var tp = app.createVerticalPanel().setSpacing(0).setWidth('100%').setHorizontalAlignment(UiApp.HorizontalAlignment.RIGHT).add(
    app.createGrid(1,2).setCellPadding(0).setCellSpacing(0).setWidget(
      0, 0, createLabel_(app,T.placeholders)).setWidget(
      0, 1, css_(questions, _placeHolders)));

  var grid = app.createGrid(ef.length-1, 2).setCellSpacing(0).setCellPadding(0).setId('grid').setWidth('100%');
  var links = app.createHorizontalPanel().setSpacing(3).add(app.createLabel(msg_(T.addField)));
  for( var i = 0; i < ef.length-2; i++ ) {
    var visible = s[ef[i]+idx] != '' || i == 2;
    grid.setWidget(
      i, 0, createLabel_(app,T[ef[i]]+':',ef[i]+idx+':').setVisible(visible)).setWidget(
      i, 1, app.createGrid(1,2).setId('box'+ef[i]+idx).setWidth('100%').setCellPadding(0).setCellSpacing(0).setWidget(
        0, 0, createTextBox_(app, ef[i]+idx, _emailField)).setWidget(
        0, 1, createLabel_(app, unescape('%u2190%20')+T.insertPlaceholder+nbs, 'ip'+ef[i]+idx, h.insert)).setVisible(visible));
    if( !visible )
      links.add(createLabel_(app, T[ef[i]].replace(' ',''), 'link'+ef[i]+idx, h.link));
  }

  var html = app.createCheckBox(T.html+nbs).setValue(s['html'+idx]=='true').setName('html'+idx);
  var vp = app.createHorizontalPanel().setSize('100%', _body.height).setVerticalAlignment(UiApp.VerticalAlignment.TOP).add(
    app.createVerticalPanel().setWidth('100%').setHorizontalAlignment(UiApp.HorizontalAlignment.RIGHT).add(
      css_(createLabel_(app,T.body+':'), {marginTop:'5px'})).add(
      html.setWidth('100%')));
  grid.setWidget(ef.length-2, 0, vp).setWidget(
    ef.length-2, 1, css_(app.createTextArea().setText(s['body'+idx]).setId('body'+idx).setName('body'+idx), _body));

  var save = app.createButton(T.saveAndClose).addClickHandler(h.save);
  var sidesW = (_appSize[0]-180)/2;
  var bp = app.createHorizontalPanel().setWidth('100%').add( //bottom panel
    links).setCellWidth(links, sidesW+'px').add(
    save).setCellWidth(save, (_appSize[0]-sidesW*2-15)+'px').setCellHorizontalAlignment(save, UiApp.HorizontalAlignment.CENTER).add(
    createLabel_(app, unescape('%u2191%20')+T.insertPlaceholder+nbs,'ipbody'+idx,h.insert).setWidth(sidesW+'px'));
  return {name:repl_(T.emailTab, idx+1), tab:css_(app.createVerticalPanel().add(tp).add(grid).add(bp), {width:'100%', maxWidth:_appSize[0]+'px'})};
}

function linkClick_(e) {
  var app = UiApp.getActiveApplication();
  var id = e.parameter.source.substr(4);
  app.getElementById('box'+id).setVisible(true);
  app.getElementById(id+':').setVisible(true);
  app.getElementById('link'+id).setVisible(false);
  return app;
}

function insertQuestion_(e) {
  var app = UiApp.getActiveApplication();
  var id = e.parameter.source.substr(2);
  var idx = id.match(/\d*$/);
  var value = e.parameter[id]+'#'+e.parameter['question'+idx]+'#';
  app.getElementById(id).setText(value).setFocus(true);
  return app;
}

function save_(e) {
  var app = UiApp.getActiveApplication();
  c.ss = SpreadsheetApp.getActiveSpreadsheet();

  //load language
  c.cs = c.ss.getSheetByName(NAME);
  var r = c.cs.getRange('B3');
  T = JSON.parse(r.getValue()).T;
  
  //read settings
  for( var i in ap )
    s[ap[i]] = e.parameter[ap[i]];
  var idx = 0;
  for( ; e.parameter['to'+idx] !== undefined; idx++ )
    for( var i in ef )
      s[ef[i]+idx] = e.parameter[ef[i]+idx];
  //do validations
  c.ss = SpreadsheetApp.getActiveSpreadsheet();
  var id = 'fSheet';
  c.fs = c.ss.getSheetByName(s[id]);
  if( c.fs == null )
    return showErrorDialog_(app,idx,id,T.sheetError);
  s[id] = c.fs.getName();
  
  var toNum = {qtt:1,qWarn:0,qLimit:0};
  for( var id in toNum ) {
    var num = parseInt(s[id].match(/^\d+$/));
    if( isNaN(num) || num < toNum[id] || id == 'qtt' && num > 10 )
      return showErrorDialog_(app,idx,id,T.numberError);
    s[id] = num;
  }

  id = 'fLoc';
  if( s[id] != '' ) {
    var pos = s[id].lastIndexOf('!');
    if( pos == -1 )
      return showErrorDialog_(app,idx,id,T.formulasError);
    var name = s[id].substr(0,pos);
    c.fl = name == s.fSheet ? c.fs : c.ss.getSheetByName(name);
    if( c.fl == null )
      return showErrorDialog_(app,idx,id,T.formulasSheetError);
    var maxCol = c.fl.getMaxColumns();
    var fc = s[id].substr(pos+1).split(':');
    for( var i = 0; i < fc.length; i++ )
      if( fc[i].match(/^[a-zA-Z]{1,2}2?$/) ) {
        var last = fc[i].length-1;
        fc[i] = changeColumnNotation_(fc[i].charAt(last)=='2' ? fc[i].substr(0,last) : fc[i],true);
        if( fc[i] > maxCol )
          return showErrorDialog_(app,idx,id,T.formulasColsError);
      }
    if( fc.length == 1 )
      fc.push(fc[0]);
    s[id] = c.fl.getName()+'!'+changeColumnNotation_(fc[0],false)+':'+changeColumnNotation_(fc[1],false);
  }

  c.size = c.fs.getLastColumn()-1;
  c.questions = parseQuestions_(c.fs.getRange(1,2,1,c.size).getValues()[0]);
  for( var i = s.qtt-1; i > 0; i-- ) {
    if( s[ef[0]+i] == null )
      createDefaultEmail_(i);
    else
      break;
  }
  //TODO validade emails fields
    //look for the questions
    //check the adv formattings
    //verify the 'To' field; can even take a peek at the real answers
    //parse the html

  //save settings
  delete s.quota;
  s.Version = VERSION;
  r.setValue(JSON.stringify({s:s, T:T}));
  app.close();
  return app;
}

function showErrorDialog_(app,tab,id,text) {
  app.getElementById('tabPanel').setVisible(false).selectTab(tab);
  app.add(css_(app.createDialogBox(false,true).setId('errorDialog').setText(T.errorTitle),
               {position:'fixed', top:'30%', left:'35%'}).add(
    app.createVerticalPanel().add(
      app.createLabel(repl_(text,T[id]))).add(app.createLabel(T.badSettings)).add(
      app.createButton(T.ok, app.createServerClickHandler('closeDialog_')).setId('focus'+id))));
  return app;
}

function closeDialog_(e) {
  var app = UiApp.getActiveApplication();
  app.getElementById('errorDialog').setVisible(false);
  app.getElementById('tabPanel').setVisible(true);
  app.getElementById(e.parameter.source.substr(5)).setFocus(true);
  return app;
}

function loadConfig_() {
  c.ss = c.ss || SpreadsheetApp.getActiveSpreadsheet();
  c.cs = c.cs || getSheet_(NAME);
  var saved = JSON.parse(c.cs.getRange('B3').getValue());
  s = saved.s;
  T = saved.T;
  sVersion = +s.Version;
  var compat = 3.6;
  if( isNaN(sVersion) || sVersion < compat || sVersion > VERSION )
    throw repl_(T.versionConflict, s.Version, VERSION, NAME).replace(/ /g,nbs);
  c.origQuota = s.quota = getQuotaSecured_();

  c.fs = getSheet_(s.fSheet);
  c.err = [];
  c.size = c.fs.getLastColumn()-1;
  var headers = c.fs.getRange(1,2,1,c.size).getValues()[0];
  if( s.fLoc != '' ) {
    var pos = s.fLoc.lastIndexOf('!');
    var name = s.fLoc.substr(0,pos);
    c.fc = s.fLoc.substr(pos+1).split(':');
    for( var i = 0; i < 2; i++ )
      c.fc[i] = changeColumnNotation_(c.fc[i],true);
    c.fc[1] = c.fc[1]-c.fc[0]+1;
    for( var i = 2; i < 4; i++ ) //custom closure mode
      c.fc[i] = c.fc.length > i ? +c.fc[i] : 0;
    if( name == s.fSheet ) {
      c.fl = c.fs;
    } else {
      c.fl = c.ss.getSheetByName(name);
      headers = headers.concat(c.fl.getRange(1,c.fc[0],1,c.fc[1]).getValues()[0]);
    }
    c.formulas = c.fl.getRange(2,c.fc[0],1,c.fc[1]).getFormulasR1C1()[0];
  }
  c.questions = parseQuestions_(headers);
}

function fix() {
  if( loadOrDefaults_() ) {
    onOpen();
    showMsg_(T.noProblem);
  }
}

function loadOrDefaults_() {
  try {
    loadConfig_();
    return true;
  } catch(e) {
    onOpen();
    var conflict = e == repl_(T.versionConflict, s.Version, VERSION, NAME).replace(/ /g,nbs);
    var app = UiApp.createApplication().setTitle(NAME).setHeight(140);
    var panel = app.createVerticalPanel().setHorizontalAlignment(UiApp.HorizontalAlignment.CENTER).setSpacing(10);
    var err = app.createVerticalPanel().setHorizontalAlignment(UiApp.HorizontalAlignment.CENTER);
    var closeHandler = app.createServerHandler('closeApp_');
    var noHandler;
    var yesHandler = 'install';
    var msg;
    if( !conflict ) {
      if( s.Version && !c.fs ) {
        var sheetList = app.createListBox().setName("fSheet");
        var sheets = c.ss.getSheets();
        for( var i in sheets ) {
          var name = sheets[i].getName();
          if( name != NAME )
            sheetList.addItem(name);
        }
        yesHandler = 'fixSheetName_';
        msg = app.createGrid(1,2).setWidth('100%').setWidget(
          0, 0, app.createLabel(repl_(T.fSheetMissing, T.fSheet, s.fSheet, T.yes))).setWidget(
          0, 1, css_(sheetList, _placeHolders));
      } else
        msg = T.badConfig;
      var msgs = repl_(T.badConfigCancel, e).replace(/ /g,nbs).split('\n');
      for( var i in msgs )
        err.add(app.createLabel(msgs[i]).setWidth('100%'));
      err.add(app.createButton(T.ok, closeHandler));
      noHandler = app.createClientHandler().forTargets(panel).setVisible(false).forTargets(err).setVisible(true);
    } else {
      msg = T.resolveConflict;
      noHandler = closeHandler;
    }
    panel.setWidth('100%').add(
      typeof(msg) == "string" ? app.createLabel(repl_(msg, s.Version, VERSION, NAME)) : msg).add(
      app.createFlowPanel().add(
        app.createButton(T.yes, app.createServerHandler(yesHandler).addCallbackElement(panel))).add(
        app.createButton(T.no, noHandler)));
    c.ss.show(app.add(panel).add(err.setVisible(false)));
    return false;
  }
}

function fixSheetName_(e) {
  c.ss = SpreadsheetApp.getActiveSpreadsheet();
  c.cs = getSheet_(NAME);
  var r = c.cs.getRange('B3');
  var saved = JSON.parse(r.getValue());
  saved.s.fSheet = e.parameter.fSheet;
  r.setValue(JSON.stringify(saved));
  onOpen();
  return closeApp_();
}

function closeApp_() {
  return UiApp.getActiveApplication().close();
}
  
function parseQuestions_(q) {
  var map = {};
  for( var i = 0; i < q.length; i++ ) {
    q[i] = q[i].toString();
    q[i] = q[i].length > 70 ? q[i].substr(0,70)+'...' : q[i];
    if( map[q[i]] !== undefined ) {
      if( map[q[i]].length == 1 )
        q[map[q[i]][0]] += '('+changeColumnNotation_(map[q[i]][0]+2,false)+')';
      map[q[i]].push(i);
      q[i] += '('+changeColumnNotation_(i+2,false)+')';
    } else
      map[q[i]] = [i];
  }
  return q; //useful for chaining
}

//change a column notation between number and letter, e.g. B <> 2; AB <> 28
function changeColumnNotation_(col,toNumber) {
  if( toNumber ) { //since the greatest value is 256(IV). I prefer this 'if' based solution over a loop one
    var c = col.toUpperCase();
    var v = c.charCodeAt(0)-64;
    return c.length > 1 ? v*26 + c.charCodeAt(1)-64 : v;
  } else {
    var toS = function(c) { return String.fromCharCode(c+64); }
    return col < 27 ? toS(col) : toS(Math.floor((col-1)/26)) + toS((col-1)%26+1);
  }
}

function createDefaults_() {
  s.Version = VERSION;
  //Form sheet,Qtt Emails,Quota warning,Quota limit,Formulas location,Closure mode
  var apv = [c.fs.getName(),1,150,30,'',T.closureValues];
  for( var i in apv )
    s[ap[i]] = apv[i];
  c.questions = parseQuestions_(c.fs.getRange(1,2,1,c.fs.getLastColumn()-1).getValues()[0]);
  createDefaultEmail_(0);
}

function createDefaultEmail_(idx) {
  var email = 'user@example.com';
  try { email = Session.getEffectiveUser().getEmail(); } catch(suppress) {}
  var body = T.defaultBody+'<br>\n<b>'+c.questions[0]+': </b>#'+c.questions[0]+'|M/d/yyyy H:mm:ss#<br>\n';
  for( var i = 1; i < c.questions.length; i++ )
    body += '<b>'+c.questions[i]+': </b>#'+c.questions[i]+'#<br>\n';
       //sender,replyTo,   to,        cc,bcc, subject,          body, html
  var v = [NAME, '', email, '', '', T.defaultSubject, body, 'true'];
  for( var i in ef )
    s[ef[i]+idx] = v[i];
}

function install(e) {
  var overwrite = e !== undefined ? true : false;
  var app = UiApp.createApplication().setTitle(NAME).setWidth(520).setHeight(180);
  c.ss = c.ss || SpreadsheetApp.getActiveSpreadsheet();
  var langDefinitionUrl = 'https://sites.google.com/site/formemailer/translate/languages.txt?attredirects=0&d=1';
  var langs = UrlFetchApp.fetch(langDefinitionUrl).getContentText().split('\n');
  var locale = SpreadsheetApp.getActive().getSpreadsheetLocale();
  var myLang = locale.split('_')[0];
  var found = false;
  var langList = css_(app.createListBox().setName("language"), _placeHolders);
  var langMap = {};
  var langCompat = 0;
  var firstLang = null;
  var count = 0;
  for( var i in langs ) {
    var csv = langs[i].split(',');
    if( csv[0] == 'versions' ) {
      langCompat = 0;
      for( var j = 1; j < csv.length; ++j )
        if( +csv[j] == VERSION ) {
          langCompat = 1;
          break;
        } else if( +csv[j] < VERSION )
          langCompat = 2;
    } else if( langCompat != 0 && langMap[csv[0]] === undefined ) {
      langMap[csv[0]] = 1;
      if( firstLang === null ) firstLang = csv[2];
      
      langList.addItem(csv[1]+(langCompat == 1 ? '' : '*'), langCompat+','+csv[2]);
      if( csv[0] == locale || !found && csv[0].split('_')[0] == myLang ) {
        found = csv[2];
        langList.setSelectedIndex(count);
      }
      ++count;
    }
  }

  eval("pack="+UrlFetchApp.fetch(found || firstLang).getContentText());
  for( var i in pack )
    T[i] = pack[i];

  var sheetList = css_(app.createListBox().setName("fSheet"), _placeHolders);
  var sheets = c.ss.getSheets();
  found = false;
  for( var i in sheets ) {
    var name = sheets[i].getName();
    if( name != NAME )
      sheetList.addItem(name);
    else
      found = true;
  }

  var panel = app.createVerticalPanel().setHorizontalAlignment(UiApp.HorizontalAlignment.CENTER).setSpacing(5);
  panel.add(
    app.createGrid(2, 2).setWidget(
      0, 0, app.createLabel(T.pickLanguage).setId('pickLanguage')).setWidget(
      0, 1, langList.addChangeHandler(app.createServerHandler('langChange_').addCallbackElement(langList))).setWidget(
      1, 0, app.createLabel(T.pickSheet).setId('pickSheet')).setWidget(
      1, 1, sheetList)).add(
    css_(app.createLabel(T.langIncomplete).setId('langIncomplete').setVisible(false), {fontStyle:'italic'}));
  var button = app.createButton(T.install, app.createServerHandler('proceedInstall_').addCallbackElement(panel)).setId('install');
  panel.add(
    app.createCheckBox(repl_(T.overwrite, NAME)).setName('overwrite').setId('overwrite').setValue(overwrite).setVisible(found).
    addValueChangeHandler(app.createClientHandler().forTargets(button.setEnabled(!found||overwrite)).setEnabled(false)).
    addValueChangeHandler(app.createServerHandler('overwrite_').addCallbackElement(panel)));
  panel.add(button);
  c.ss.show(app.add(panel));
}

function langChange_(e) {
  try{
  var app = UiApp.getActiveApplication();
  var lang = e.parameter.language.split(',');
  eval("pack="+UrlFetchApp.fetch(lang[1]).getContentText());
  var update = ['pickLanguage','pickSheet','install','overwrite','langIncomplete'];
  for( var i = 0; i < update.length; ++i )
    app.getElementById(update[i]).setText(repl_(pack[update[i]] === undefined ? T[update[i]] : pack[update[i]], NAME));
  app.getElementById('langIncomplete').setVisible(lang[0] == '2');
  } catch(err) {
    app.add(app.createLabel(String(err)));
  }
  return app;
}

function overwrite_(e) {
  var app = UiApp.getActiveApplication();
  if( e.parameter.overwrite == 'true' )
    app.getElementById('install').setEnabled(true);
  return app;
}

function proceedInstall_(e) {
  eval("pack="+UrlFetchApp.fetch(e.parameter.language.split(',')[1]).getContentText());
  for( var i in pack )
    T[i] = pack[i];
  
  c.ss = SpreadsheetApp.getActiveSpreadsheet();

  c.fs = getSheet_(e.parameter.fSheet);
  if( c.fs.getLastColumn() == 0 ) {
    var app = UiApp.createApplication().setTitle(NAME).setHeight(100);
    app.add( app.createVerticalPanel().setHorizontalAlignment(UiApp.HorizontalAlignment.CENTER).add(
      app.createLabel(repl_(T.blankSheet, c.fs.getName()))).add(
      app.createButton(T.ok, app.createServerHandler('closeApp_'))));
    return c.ss.show(app);
  }
  
  var col = c.fs.getRange(1,1);
  var val = col.getValue();
  var status1 = repl_(T.statusColumn, NAME);
  var status2 = NAME+' Status'; //old default english name
  var relocateStatus = false;
  if( val != status1 ) {
    if( val != status2 ) {
      c.fs.insertColumnBefore(1).setColumnWidth(1, 133).
        getRange(1,1).setValue(status1).setComment(T.statusComment);

      var lastCol = c.fs.getLastColumn();
      val = c.fs.getRange(1, lastCol).getValue();
      if( val == status1 || val == status2 ) {
        relocateStatus = true;
        var qttRows = c.fs.getLastRow()-1;
        c.fs.getRange(2, lastCol, qttRows, 1).moveTo(c.fs.getRange(2, 1, qttRows, 1));
        c.fs.deleteColumn(lastCol);
      }
    } else
      col.setValue(status1);
  }
  createDefaults_();
  
  c.cs = c.ss.getSheetByName(NAME);
  if( c.cs != null ) {
    c.cs.clear();
  } else
    c.cs = c.ss.insertSheet(NAME);
  var header = repl_(T.header, NAME).split('\n');
  var prepare = [];
  for( var i in header )
    prepare.push([header[i]]);
  c.cs.getRange("A1:A3").setValues(prepare);
  var instructions = repl_(T.instructions, T.fSheet).split('\n');
  prepare = [];
  var boldLine = 6;
  for( var i in instructions ) {
    prepare.push([instructions[i],'']);
    if( boldLine == 6 && instructions[i] == '' )
      boldLine += +i;
  }
  c.cs.getRange(5, 1, instructions.length, 2).setValues(prepare).mergeAcross().setWrap(true);
  c.cs.getRange('A1:B1').mergeAcross().setHorizontalAlignment('center').setFontSize(14);
  c.cs.getRange('B2').setValue('No').setFontColor('#993300').setHorizontalAlignment('left').setFontWeight('bold');
  c.cs.getRange('B3').setWrap(false).setValue(JSON.stringify({s:s, T:T})).setComment(T.settingsComment);
  c.cs.getRange('C3').setValue(' ');
  c.cs.getRange('A5').setFontWeight('bold');
  c.cs.getRange(boldLine,1).setFontWeight('bold');
  c.cs.setColumnWidth(1,217).setColumnWidth(2,342);
  onOpen();
  
  if( relocateStatus ) {
    var app = UiApp.createApplication().setTitle(NAME).setHeight(100);
    app.add(app.createVerticalPanel().setHorizontalAlignment(UiApp.HorizontalAlignment.CENTER).add(
      app.createLabel(repl_(T.relocateStatus, c.fs.getName()))).add(
      app.createButton(T.ok, app.createServerHandler('closeApp_'))));
    return c.ss.show(app);
  } else
    return UiApp.getActiveApplication().close();
}

function createLabel_(app,text,id,handler) {
  var label = css_(app.createLabel(text,false), _right);
  if( id != null )
    label.setId(id == '' ? text : id);
  if( handler !== undefined )
    css_(label.addClickHandler(handler), _link);
  return label;
}

function createTextBox_(app,id,style) {
  return css_(app.createTextBox().setId(id).setName(id).setText(s[id]+''),
              style || (typeof(s[id]) == 'string' ? textParam : numParam));
}

function getSheet_(name) {
  var s = c.ss.getSheetByName(name);
  if( s == null )
    throw name == 'cancel' ? T.cancelMessage : repl_(T.missingSheet, name+'');
  return s;
}

function getQuotaSecured_() {
  try { //prevent the script from stop working if the quota server fails
    return MailApp.getRemainingDailyQuota();
  } catch(e) { return 500; }
}

function errorHandling_(f,p) {
  var now = new Date().getTime();
  sset_('lastRun',now);
  //the idea here is to suppress random errors that occurs when using time-driven triggers.
  var errs = +sget_('filterRnd', '0');
  if( errs < 4 ) { //number of consecutive errors that are filtered
    try { f(p); }
    catch(suppress) { return sset_('filterRnd', errs+1); }
  } else
    f(p);
  if( errs != 0 )
    sset_('filterRnd', 0);
  var warn = s.quota < s.qWarn;
  if( c.err.length > 0 ) {
    MailApp.sendEmail(Session.getEffectiveUser().getEmail(), repl_(T.errorReportSubject, NAME),
                      repl_(T.errorReportBody, c.ss.getName(), c.err.join('\n'))+
                      (warn ? T.alsoQuota : '') +'\n\n'+c.ss.getUrl());
    if( warn )
      uset_('quota.lastWarning', now);
  } else if( c.origQuota != s.quota && warn && now-(+uget_('quota.lastWarning',''+now)) > 24*60*60*1000 ) { //1 day
    MailApp.sendEmail(Session.getEffectiveUser().getEmail(), repl_(T.quotaMailSubject, NAME),
                      repl_(T.quotaMailBody, s.quota, s.qWarn)+ '\n\n' + c.ss.getUrl());
    uset_('quota.lastWarning', now);
  }
}

//apply css styles to the element
function css_(element, style) {
  for( var key in style )
    if( typeof style[key] === 'object' ) //cascade
      css_(element, style[key]);
    else
      element.setStyleAttribute(key, style[key]);
  return element; //useful for chaining
}

function showMsg_(msg, buttons) {
  return Browser.msgBox(NAME, msg_(msg), Browser.Buttons[buttons || 'OK']);
}
function showInput_(msg, buttons) {
  return Browser.inputBox(NAME, msg_(msg), Browser.Buttons[buttons || 'OK_CANCEL']);
}
function msg_(msg) {
  return msg.toString ? msg.toString().replace(/ /g,nbs).replace(/\n/g,'\\n') : msg;
}
//copied and adapted from http://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format
function repl_() {
  var args = arguments;
  return args[0].replace(/{(\d+)}/g, function(match, number) { 
    return typeof args[number] !== 'undefined' ? args[number] : match;
  });
}
function startsWith_(string, start) {
  return string.length >= start.length && string.substr(0,start.length) === start;
}

//shorter names for Script and UserProperties
//also ignore errors on these APIs, since they're not used for core features of FormEmailer
function sget_(prop,def)   { return get_(ScriptProperties, prop ) || def; }
function sset_(prop,value) { set_(ScriptProperties, prop, value); }
function uget_(prop,def)   { return get_(UserProperties, prop) || def; }
function uset_(prop,value) { set_(UserProperties, prop, value); }
function set_(o,p,v) { try { o.setProperty(p,v); } catch(e) {} }
function get_(o,p) { try { return o.getProperty(p); } catch(e) { return ''; } }
