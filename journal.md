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

