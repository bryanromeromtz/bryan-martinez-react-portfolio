import { library } from "@fortawesome/fontawesome-svg-core";
import { faCodepen, faFacebookF, faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import {
  faTrash,
  faSignOutAlt,
  faEdit,

} from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
  return library.add(faTrash, faSignOutAlt, faEdit, faFacebookF, faInstagram, faGithub, faLinkedinIn, faCodepen);
}

export default Icons;
