### 🚀 9 nguyên tắc thiết kế Rest API cơ bản cần phải biết 🚀 ###

# 1 -  Giao thức giao tiếp 

Giao thức giao tiếp giữa API và người dùng luôn sử dụng giao thức HTTPs.

# 2 - Tên miền 

* https://api.example.com (heroku,...)

OR

* https://example.org/api/

# 3 - Phiên bản

- https://api.example.com/v1/

- https://api.example.com/v2/

# 4 - Điểm cuối (Endpoint)

- https://api.example.com/v1/user  

- https://api.example.com/v1/product (sử dụng danh từ: user,product,...)

# 5 - OPTIONS HTTP

* GET (SELECT): Lấy tài nguyên (một hoặc nhiều mục) từ máy chủ.
* CREATE (CREATE): Tạo một tài nguyên mới trên máy chủ.
* PUT (UPDATE): Cập nhật tài nguyên trên máy chủ
* PATCH (UPDATE): Cập nhật tài nguyên trên máy chủ
* DELETE (DELETE): Xoá tài nguyên khỏi máy chủ
* HEAD: Lấy siêu dữ liệu của tài nguyên

* khác nhau giữa PUT và PATCH

- Thay đổi giá trị name trong object sau:

{
    "name": "lycaothang",
    "birthday": "xx-xx-xxxx",
    "phone" : "xxxxxxxx94"
}

* Nếu dùng PUT (Đưa toàn bộ tài nguyên trong object cập nhật lại)

{
    "name": "LyCaoThang",
    "birthday": "xx-xx-xxxx",
    "phone" : "xxxxxxxx94"
}

* Nếu dùng PATCH (Cập nhật đúng giá trị cần, không cần gọi toàn bộ)

{
     "name": "LyCaoThang",
}

# 6 - Filtering

- ?limit=10: Chỉ định số lượng bản ghi được trả về.
- ?offset=10: Chỉ định vị trí bắt đầu của bản ghi được trả về.
- ?page=2&per_page=100: Chỉ định số trang và số lượng bản ghi trên mỗi trang.
- ?sortby=name&order=asc: Chỉ định thuộc tính nào để sắp xếp các kết quả trả về và thứ tự sắp xếp.

# 7 - Return status

- 200: Máy chủ trả về thành công dữ liệu do người dùng yêu cầu.
- 201 CREATE (POST / PUT / PATCH): Người dùng đã tạo hoặc cập nhật dữ liệu thành công.
- 202: Được chấp nhận. Cho biết một yêu cầu đã vào hàng đợi nền (tác vụ không đồng bộ).
- 204 Không có nội dung [XOÁ]: Người dùng đã xoá thành công dữ liệu.
- 400 Yêu cầu không hợp lệ (POST / PUT / PATCH): Có lỗi trong yêu cầu do người dùng gửi và máy chủ chưa thực hiện thao tác tạo hoặc cập nhật dữ liệu.
- 401 Unauthorized [*]: cho biết rằng người dùng không có quyền (mã thông báo, tên người dùng và mật khẩu bị sai).
- 403 Forbidden [*]: người dùng được uỷ quyền (trái ngược 401), nhưng quyền truy cập bị cấm
- 404 NOT FOUND [*]: Yêu cầu do người dùng gửi là một bản ghi không tồn tại và máy chủ chưa thực hiện thao tác 
- 500 Lỗi máy chủ nội bộ [*]: Máy chủ bị lỗi và người dùng sẽ không thể xác định yêu cầu có thành công hay không.

# 8 - Xử lý lỗi

{
    error: "Invalid API key"
}

# 9 - Return

* GET / collection: trả về danh sách các đối tượng tài nguyên (mảng)
* GET / collection / resource: trả về một đối tượng tài nguyên duy nhất
* POST / collection: trả về đối tượng tài nguyên mới được tạo 
* PUT / collection / resource: trả về đối tượng tài nguyên hoàn chỉnh
* PATCH / collection / resource: trả về đối tượng tài nguyên hoàn chỉnh
* DELETE / collection / resource: trả về một tài nguyên trống



### 🚀 Nguyên tắc thiết kế một giao diện API PRO 🚀 ###

# 1 - Sign (Chữ ký)

# 2 - IP White List (Danh sách trống các địa chỉ IP)

# 3 - Encrypt (mã hoá dữ liệu cần thiết)

# 4 - Validate REST request (xác minh tham số đầu vào)

# 5 - Rate Limits REST API (Giới hạn requests)

# 6 - Return responses JSON

# 7 - Return errors

# 8 - Logs requests

# 9 - Limites records

# 10 - Check QPS

# 11 - Sensitivity data 

# 12 - async request
