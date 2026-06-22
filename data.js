// ============================================
// NAVAGREEN LOGISTICS - MOCK DATA
// ============================================

const MOCK_USERS = [
  { id: 1, username: 'admin', password: 'admin123', name: 'Ahmad Fauzi', role: 'Admin', avatar: 'AF' },
  { id: 2, username: 'supervisor', password: 'super123', name: 'Budi Santoso', role: 'Supervisor', avatar: 'BS' },
  { id: 3, username: 'gudang', password: 'gudang123', name: 'Citra Dewi', role: 'Karyawan Gudang', avatar: 'CD' },
  { id: 4, username: 'supir', password: 'supir123', name: 'Dedi Kurniawan', role: 'Supir', avatar: 'DK' },
];

const MOCK_DOKUMEN = [
  { id: 'DOK-001', jenis: 'Resi Pengiriman', nomorResi: 'RP-2026-00142', pengirim: 'PT Sinar Abadi', penerima: 'Toko Makmur Jaya', kota: 'Surabaya', tanggal: '2026-05-18', status: 'Diproses', berat: '12.5 kg' },
  { id: 'DOK-002', jenis: 'Resi Pengambilan', nomorResi: 'RPA-2026-00089', pengirim: 'CV Maju Bersama', penerima: 'Gudang Navagreen', kota: 'Jakarta', tanggal: '2026-05-18', status: 'Selesai', berat: '45.0 kg' },
  { id: 'DOK-003', jenis: 'Surat Jalan', nomorResi: 'SJ-2026-00211', pengirim: 'Gudang Navagreen', penerima: 'UD Berkah Sentosa', kota: 'Bandung', tanggal: '2026-05-17', status: 'Terkirim', berat: '28.3 kg' },
  { id: 'DOK-004', jenis: 'Resi Pengiriman', nomorResi: 'RP-2026-00143', pengirim: 'PT Indo Logistik', penerima: 'Apotek Sehat', kota: 'Semarang', tanggal: '2026-05-17', status: 'Diproses', berat: '8.7 kg' },
  { id: 'DOK-005', jenis: 'Resi Pengambilan', nomorResi: 'RPA-2026-00090', pengirim: 'PT Nusantara Hijau', penerima: 'Gudang Navagreen', kota: 'Medan', tanggal: '2026-05-16', status: 'Menunggu', berat: '67.2 kg' },
  { id: 'DOK-006', jenis: 'Surat Jalan', nomorResi: 'SJ-2026-00212', pengirim: 'Gudang Navagreen', penerima: 'Toko Herbal Alami', kota: 'Yogyakarta', tanggal: '2026-05-16', status: 'Terkirim', berat: '15.8 kg' },
  { id: 'DOK-007', jenis: 'Resi Pengiriman', nomorResi: 'RP-2026-00144', pengirim: 'CV Alam Raya', penerima: 'Distributor Prima', kota: 'Makassar', tanggal: '2026-05-15', status: 'Gagal', berat: '33.1 kg' },
  { id: 'DOK-008', jenis: 'Resi Pengambilan', nomorResi: 'RPA-2026-00091', pengirim: 'PT Global Farma', penerima: 'Gudang Navagreen', kota: 'Denpasar', tanggal: '2026-05-15', status: 'Selesai', berat: '22.4 kg' },
];

const MOCK_PEMERIKSAAN = [
  { id: 'PMR-001', nomorResi: 'RPA-2026-00089', namaBarang: 'Navagreen Hair Tonic 100ml (x200)', kuantitasExpected: 200, kuantitasActual: 200, kondisi: 'Lengkap', status: 'Selesai', tanggal: '2026-05-18', catatan: 'Semua barang dalam kondisi baik', pemeriksa: 'Budi Santoso' },
  { id: 'PMR-002', nomorResi: 'RPA-2026-00090', namaBarang: 'Navagreen Shampoo 250ml (x150)', kuantitasExpected: 150, kuantitasActual: null, kondisi: null, status: 'Menunggu', tanggal: '2026-05-18', catatan: '', pemeriksa: null },
  { id: 'PMR-003', nomorResi: 'RPA-2026-00088', namaBarang: 'Navagreen Conditioner 200ml (x100)', kuantitasExpected: 100, kuantitasActual: 95, kondisi: 'Kurang', status: 'Bermasalah', tanggal: '2026-05-17', catatan: '5 unit hilang dalam pengiriman', pemeriksa: 'Budi Santoso' },
  { id: 'PMR-004', nomorResi: 'RPA-2026-00087', namaBarang: 'Navagreen Body Lotion 150ml (x80)', kuantitasExpected: 80, kuantitasActual: 80, kondisi: 'Lengkap', status: 'Selesai', tanggal: '2026-05-17', catatan: 'Kemasan utuh', pemeriksa: 'Budi Santoso' },
  { id: 'PMR-005', nomorResi: 'RPA-2026-00086', namaBarang: 'Navagreen Face Wash 100ml (x120)', kuantitasExpected: 120, kuantitasActual: 118, kondisi: 'Rusak', status: 'Bermasalah', tanggal: '2026-05-16', catatan: '2 botol pecah, kemasan rusak', pemeriksa: 'Budi Santoso' },
];

const MOCK_PAKET = [
  { id: 'PKT-001', kotaTujuan: 'Surabaya', totalBarang: 3, beratTotal: '25.4 kg', status: 'Siap Kirim', supir: 'Dedi Kurniawan', items: ['Hair Tonic x50', 'Shampoo x30', 'Lotion x20'], tanggal: '2026-05-18' },
  { id: 'PKT-002', kotaTujuan: 'Bandung', totalBarang: 2, beratTotal: '18.7 kg', status: 'Dikemas', supir: null, items: ['Face Wash x40', 'Conditioner x25'], tanggal: '2026-05-18' },
  { id: 'PKT-003', kotaTujuan: 'Semarang', totalBarang: 4, beratTotal: '42.1 kg', status: 'Siap Kirim', supir: 'Dedi Kurniawan', items: ['Hair Tonic x80', 'Shampoo x50', 'Body Lotion x30', 'Face Wash x20'], tanggal: '2026-05-18' },
  { id: 'PKT-004', kotaTujuan: 'Yogyakarta', totalBarang: 1, beratTotal: '8.9 kg', status: 'Dikemas', supir: null, items: ['Conditioner x35'], tanggal: '2026-05-17' },
  { id: 'PKT-005', kotaTujuan: 'Medan', totalBarang: 2, beratTotal: '31.6 kg', status: 'Dikemas', supir: null, items: ['Shampoo x60', 'Hair Tonic x40'], tanggal: '2026-05-17' },
];

const MOCK_PENGIRIMAN = [
  { id: 'KRM-001', nomorResi: 'RP-2026-00142', paketId: 'PKT-001', tujuan: 'Surabaya', penerima: 'Toko Makmur Jaya', alamat: 'Jl. Raya Darmo No. 45, Surabaya', telepon: '031-5678901', supir: 'Dedi Kurniawan', status: 'Dalam Perjalanan', tanggal: '2026-05-18', estimasi: '2026-05-19', berat: '25.4 kg', catatan: '' },
  { id: 'KRM-002', nomorResi: 'SJ-2026-00211', paketId: 'PKT-003', tujuan: 'Bandung', penerima: 'UD Berkah Sentosa', alamat: 'Jl. Asia Afrika No. 112, Bandung', telepon: '022-4567890', supir: 'Dedi Kurniawan', status: 'Terkirim', tanggal: '2026-05-17', estimasi: '2026-05-18', berat: '28.3 kg', catatan: 'Diterima oleh Pak Hasan' },
  { id: 'KRM-003', nomorResi: 'RP-2026-00143', paketId: null, tujuan: 'Semarang', penerima: 'Apotek Sehat', alamat: 'Jl. Pemuda No. 78, Semarang', telepon: '024-3456789', supir: 'Dedi Kurniawan', status: 'Menunggu', tanggal: '2026-05-18', estimasi: '2026-05-20', berat: '8.7 kg', catatan: '' },
  { id: 'KRM-004', nomorResi: 'RP-2026-00144', paketId: null, tujuan: 'Makassar', penerima: 'Distributor Prima', alamat: 'Jl. Sultan Alauddin No. 200, Makassar', telepon: '0411-2345678', supir: 'Eko Prasetyo', status: 'Gagal', tanggal: '2026-05-15', estimasi: '2026-05-17', berat: '33.1 kg', catatan: 'Alamat tidak ditemukan, penerima tidak bisa dihubungi' },
  { id: 'KRM-005', nomorResi: 'SJ-2026-00212', paketId: null, tujuan: 'Yogyakarta', penerima: 'Toko Herbal Alami', alamat: 'Jl. Malioboro No. 56, Yogyakarta', telepon: '0274-1234567', supir: 'Dedi Kurniawan', status: 'Terkirim', tanggal: '2026-05-16', estimasi: '2026-05-17', berat: '15.8 kg', catatan: 'Diterima langsung oleh pemilik toko' },
];

const MOCK_ACTIVITIES = [
  { type: 'green', icon: '✓', text: '<strong>Pengiriman KRM-002</strong> berhasil dikirim ke Bandung', time: '10 menit lalu' },
  { type: 'blue', icon: '📦', text: '<strong>Paket PKT-001</strong> siap kirim ke Surabaya', time: '25 menit lalu' },
  { type: 'amber', icon: '🔍', text: '<strong>Pemeriksaan PMR-002</strong> menunggu verifikasi', time: '1 jam lalu' },
  { type: 'green', icon: '📄', text: '<strong>Dokumen DOK-008</strong> telah selesai diproses', time: '2 jam lalu' },
  { type: 'red', icon: '✕', text: '<strong>Pengiriman KRM-004</strong> gagal - alamat tidak ditemukan', time: '3 jam lalu' },
  { type: 'blue', icon: '👤', text: '<strong>Admin</strong> menambahkan dokumen baru DOK-008', time: '4 jam lalu' },
  { type: 'green', icon: '✓', text: '<strong>Pemeriksaan PMR-004</strong> selesai - kondisi lengkap', time: '5 jam lalu' },
];

const MOCK_CHART_SHIPMENTS = {
  labels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'],
  data: [28, 35, 42, 31, 48, 38, 22],
  lastWeek: [22, 28, 35, 28, 38, 30, 18],
};

const MOCK_CHART_STATUS = {
  labels: ['Terkirim', 'Dalam Proses', 'Menunggu', 'Gagal'],
  data: [156, 42, 28, 12],
  colors: ['#22c55e', '#3b82f6', '#f59e0b', '#ef4444'],
};

const MOCK_CHART_MONTHLY = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei'],
  data: [420, 510, 480, 560, 620],
};

const MOCK_KPI = {
  totalPengiriman: { value: 1248, trend: '+12.5%', up: true },
  keberhasilan: { value: 94.8, trend: '+2.1%', up: true, suffix: '%' },
  gagalKirim: { value: 18, trend: '-8.3%', up: false },
  rataWaktu: { value: 2.4, trend: '-0.3', up: true, suffix: ' hari' },
};
