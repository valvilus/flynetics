import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import {
	Menu,
	X,
	Home,
	Plane,
	Users,
	FileText,
	MapPin,
	Monitor,
	User,
	Moon,
	Sun,
	LogOut
} from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useTheme } from '../context/ThemeContext'
import NotificationsContainer from '../components/ui/NotificationsContainer'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const MainLayout: React.FC = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false)
	const { user, logout } = useAuth()
	const { toggleTheme, isDarkMode } = useTheme()
	const location = useLocation()
	const navigate = useNavigate()

	const toggleSidebar = () => {
		setSidebarOpen(!sidebarOpen)
	}

	const closeSidebar = () => {
		setSidebarOpen(false)
	}

	const handleLogout = () => {
		logout()
		navigate('/login')
	}

	const menuItems = [
		{ path: '/dashboard', icon: <Home size={20} />, label: 'Главная' },
		{ path: '/drones', icon: <Plane size={20} />, label: 'Дроны' },
		{ path: '/pilots', icon: <Users size={20} />, label: 'Пилоты' },
		{ path: '/flights', icon: <FileText size={20} />, label: 'Заявки' },
		{ path: '/monitoring', icon: <Monitor size={20} />, label: 'Мониторинг' },
		{
			path: '/no-fly-zones',
			icon: <MapPin size={20} />,
			label: 'Запретные зоны'
		},
		{ path: '/profile', icon: <User size={20} />, label: 'Профиль' }
	]

	return (
		<div className="flex h-screen bg-gray-100 dark:bg-gray-900">
			{/* Боковое меню для мобильных устройств */}
			<div
				className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden ${
					sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
				}`}
				onClick={closeSidebar}
			/>

			{/* Боковое меню */}
			<aside
				className={`fixed inset-y-0 left-0 z-50 w-64 glass border-r border-white/10 transition-transform duration-300 transform lg:translate-x-0 lg:static lg:inset-auto ${
					sidebarOpen ? 'translate-x-0' : '-translate-x-full'
				}`}
			>
				<div className="flex items-center justify-between h-16 px-4 border-b border-white/10">
					<div className="flex items-center space-x-2">
						<Plane className="h-8 w-8 text-primary" />
						<span className="text-xl font-bold text-gray-900 dark:text-white">
							FlyNetics
						</span>
					</div>
					<button
						className="p-1 rounded-md text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white lg:hidden"
						onClick={closeSidebar}
					>
						<X size={24} />
					</button>
				</div>

				<nav className="mt-4 px-2 space-y-1">
					{menuItems.map(item => {
						const isActive = location.pathname === item.path
						return (
							<Link
								key={item.path}
								to={item.path}
								className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
									isActive
										? 'bg-primary/10 text-primary'
										: 'text-gray-700 dark:text-gray-300 hover:bg-gray-200/50 dark:hover:bg-gray-800/50'
								}`}
								onClick={closeSidebar}
							>
								<span className="mr-3">{item.icon}</span>
								<span>{item.label}</span>
							</Link>
						)
					})}
				</nav>

				<div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
					<div className="flex items-center justify-between">
						<button
							onClick={toggleTheme}
							className="p-2 rounded-full hover:bg-gray-200/50 dark:hover:bg-gray-800/50"
						>
							{isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
						</button>
						<button
							onClick={handleLogout}
							className="flex items-center px-4 py-2 text-error hover:bg-error/10 rounded-lg transition-colors"
						>
							<LogOut size={20} className="mr-2" />
							<span>Выход</span>
						</button>
					</div>
				</div>
			</aside>

			{/* Основной контент */}
			<div className="flex flex-col flex-1 overflow-hidden">
				{/* Верхняя панель */}
				<header className="glass border-b border-white/10 z-10">
					<div className="flex items-center justify-between lg:justify-end h-16 px-6">
						<button
							className="p-1 rounded-md text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white lg:hidden"
							onClick={toggleSidebar}
						>
							<Menu size={24} />
						</button>

						<div className="flex items-center">
							{user && (
								<div className="flex items-center space-x-2">
									<div className="hidden md:block text-right">
										<div className="text-sm font-medium text-gray-900 dark:text-white">
											{user.name}
										</div>
										<div className="text-xs text-gray-500 dark:text-gray-400">
											{user.role === 'admin' && 'Администратор'}
											{user.role === 'controller' && 'Контролер'}
											{user.role === 'dispatcher' && 'Диспетчер'}
											{user.role === 'operator' && 'Оператор'}
											{user.role === 'pilot' && 'Пилот'}
											{user.role === 'observer' && 'Наблюдатель'}
											{user.role === 'support' && 'Техподдержка'}
										</div>
									</div>
									<div className="w-10 h-10 rounded-full overflow-hidden">
										<img
											src={user.avatar || 'https://i.pravatar.cc/150?img=1'}
											alt={user.name}
											className="w-full h-full object-cover"
										/>
									</div>
								</div>
							)}
						</div>
					</div>
				</header>

				{/* Основной контент */}
				<main className="flex-1 overflow-auto p-6 bg-gray-100 dark:bg-gray-900">
					<Outlet />
				</main>
			</div>

			{/* Контейнер уведомлений */}
			<NotificationsContainer />
		</div>
	)
}

export default MainLayout
