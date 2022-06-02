export default class AboutUsService {
  getMembers = () => fetch(`http://localhost:8000/members`).json();
}
