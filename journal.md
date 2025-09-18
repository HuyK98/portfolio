### Day 1 – [10/09/2025]
### 🔑 Topics learned
- JSX cơ bản (một root element, thẻ phải đóng)
- Component & Props
- Conditional Rendering (if, ? :, &&)
- Dựng khung project bằng React + CSS (Header, Footer)
- Học và sử dụng cách truyền ảnh từ component cha -> con

### Tasks done
- Làm ProfileCard component (name, role, avatar, conditional badge)
- Tạo layout cơ bản (App.jsx, Header, Footer)

### Still confused
- Import ảnh tối ưu trong React
- CSS Modules vs CSS thường

### Next plan
- Học Rendering List + State
- Thêm Dark/Light Toggle cho Header
- Render Skills list bằng '.map()'

## Day 2 – [11/09/2025]

### Topics learned
- React 'useState' hook: tạo state, setState, anatomy ('[value, setValue]').
- Event handling trong React ('onClick', 'onChange').
- Sự khác nhau giữa local variable và state.
- Pitfall: Hook phải gọi ở top-level, không được đặt trong if/loop.
- CSS toggle theme cơ bản với class 'dark' trên '<body>'.

### Tasks done
- Counter: +1, -1, +5, Reset (có disable '-1' khi count = 0).
- Portfolio: Thêm Dark/Light toggle trong Header (state + event).

### Still confused
- 'localStorage': mới hiểu sơ bộ, cần thực hành thêm để nhớ giá trị sau reload.
- Counter Pro (step input): chưa nắm hoàn toàn luồng xử lý, cần ôn lại ngày mai.

### Next plan (Day 3)
- Học chi tiết về 'localStorage' và áp dụng để nhớ Dark/Light theme.
- Làm lại CounterPro (có input step) với giải thích step-by-step.
- Học Rendering list (.map) → áp dụng render danh sách kỹ năng trong portfolio.

## Day 3 – [12/09/2025]

### Topics learned
- Array method: 'map', 'filter' (không thay đổi mảng gốc).
- Arrow function pitfalls: implicit vs explicit return.
- React key: định danh phần tử trong list, giúp React update hiệu quả.
- Conditional rendering: '? :', '&&', fallback khi list rỗng.

### Tasks done
- Mini task: Skills Manager (ẩn/hiện, xóa skill cuối).
- Portfolio update:
  - About: render skills theo nhóm, toggle ẩn/hiện.
  - Projects: card list từ mảng, conditional fallback.
  - Experience: timeline render bằng list.

### Still confused
- Chưa thực hành Responsive design → để Day 4 nghiên cứu.
- LocalStorage mới hiểu sơ bộ, chưa dùng trong code.

### Next plan (Day 4)
- Học 'useEffect' + 'localStorage' → lưu theme sau reload.
- Responsive cơ bản: media query, breakpoints, áp dụng cho portfolio.

## Day 4 – [13/09/2025]

### Topics learned
- useEffect: 3 trường hợp dependency (mỗi render, mount 1 lần, theo dõi state), cleanup.
- localStorage: set/get, JSON.stringify/parse, đồng bộ state ↔ localStorage.

### Tasks done
- Mini task: Notes app (add/remove + save localStorage).
- Portfolio update:
  - Thêm persist theme (lưu dark/light sau reload).

### Still confused
- Responsive design: chưa thực hành, cần nghiên cứu media query, breakpoints.
- localStorage: đã dùng cho notes + theme, nhưng cần luyện thêm nhiều case để chắc hơn.

### Next plan (Day 5)
- Controlled input + Contact Form UI (bắt đầu với React form).
- Responsive cơ bản: media query, breakpoints → áp dụng thử cho portfolio.

## Day 5 – [15/09/2025]

### Topics learned
- useRef (DOM ref, logic ref, lưu giá trị qua render, không trigger re-render).
- Controlled input (state quản lý value, onChange cập nhật state).
- Kết hợp useRef + useState trong form.
- CSS Grid/Flex cơ bản (auto-fit, minmax).
- Tối ưu trải nghiệm bằng Back-to-Top button (scrollTo + smooth).

### Tasks done
- Mini task luyện useRef (counter, focus input).
- Mini task controlled input (name/email + preview).
- Portfolio update:
  - Split Contact section thành 2 cột (info + form).
  - Contact form controlled (name, email, message, clear).
  - Back-to-Top button ở footer.

### Still confused
- Validate cơ bản (focus vào field sai) cần luyện thêm.
- Autosave form bằng localStorage mới hiểu ý tưởng, chưa thực hành nhiều.

### Next plan (Day 6)
- Học: Context API (chia sẻ state toàn app).
- Task: theme toggle lưu state bằng Context thay vì prop drilling.
- Portfolio: áp dụng Context để quản lý dark/light theme toàn bộ app.
- Bonus: bắt đầu nghiên cứu Responsive (media query, auto-fit) cho toàn layout.

## Day 6 – [16/09/2025]

### Topics learned
- Context API (createContext, Provider, useContext).
- Provider bọc toàn App để chia sẻ state.
- Custom hook (useTheme) để lấy dữ liệu context gọn gàng.

### Tasks done
- Mini task UserContext (Navbar, Main, Footer chia sẻ user.name).
- Portfolio update:
  - Refactor dark/light theme toggle sang ThemeContext.
  - Lưu trạng thái theme vào localStorage để reload không mất.
  - Bọc App trong ThemeProvider, dùng useTheme() trong Header.

### Still confused
- Khi nào nên chọn Context, khi nào chỉ cần props? (cần luyện thêm ví dụ).
- Hiểu cơ bản về context flow, nhưng cần làm thêm vài mini task để quen tay.

### Next plan (Day 7)
- Học: useReducer (quản lý state phức tạp hơn).
- Task: Todo app nhỏ với useReducer.
- Portfolio: chưa có update lớn, chủ yếu học kiến thức nền.
- Ôn lại Responsive design để sớm áp dụng cho portfolio.

## Day 7 – [17/09/2025]

### Topics learned
- Ôn tập kiến thức từ day 1 -> 6.
- Tìm hiểu Framer motion.

### Tasks done
- Mini task(Counter, Controlled Input + localStorage + focus + count render components).
-Update minimal animation(App.jsx, About.jsx, Projects.jsx).

### Still confused
- Chưa chắc filter,map(đã tự làm mini ex và ôn lại cho chắc).
- Framer motion cơ bản chưa nâng cao.

### Next plan (Day 8)
- Node.js intro, Express Hello World.
- Task: write api/health.
- Portfolio: FE gọi api/health -> show "api connected".

## Day 8 – [18/09/2025]

### Topics learned
- Backend: Nodejs cơ bản.
- Học và nắm cách viết express.js(so sánh sự tiện lợi khi dùng express so với node thuần).
- Học cách dùng proxy vite.

### Tasks done
- Mini task(fetch /api/health) -> api connected.
- Cấu hình server để test connect và dùng useEffect để fetch dữ liệu từ /api/projects render ra UI.

### Still confused

### Next plan (Day 8)
- Express route(nắm vững hơn).
- Middleware.
- Portfolio: fetch api cho experience và skill.

