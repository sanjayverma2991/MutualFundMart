export class UserCookie {
    load() {
      if (localStorage.getItem('mf_uinfo') === null || localStorage.getItem('mf_uinfo') == undefined) {
        console.log("copying user info..");
        var mutual_fund_uinfo = {
            user_id: "",
            email_id: "",
            f_name: "UNKNOWN",
            l_name: "",
            phone: "",
            loggedin: "",
            auth: false,
            privilege: false
          };
        localStorage.setItem('mf_uinfo', JSON.stringify(mutual_fund_uinfo));
      }
      else {
        console.log("loaded user info from local storage..");
      }
    }
  }