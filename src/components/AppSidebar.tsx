import { Home, Info, Briefcase, Users, Mail, Heart } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

const navigationItems = [
  { 
    title: "Home", 
    id: "home", 
    icon: Home,
    scrollTo: () => window.scrollTo({ top: 0, behavior: 'smooth' })
  },
  { 
    title: "About", 
    id: "about", 
    icon: Info,
    scrollTo: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  },
  { 
    title: "Our Work", 
    id: "work", 
    icon: Briefcase,
    scrollTo: () => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
  },
  { 
    title: "Membership", 
    id: "membership", 
    icon: Users,
    scrollTo: () => document.getElementById('membership')?.scrollIntoView({ behavior: 'smooth' })
  },
  { 
    title: "Contact", 
    id: "contact", 
    icon: Mail,
    scrollTo: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  },
]

export function AppSidebar() {
  const { state, setOpenMobile } = useSidebar()

  const handleNavigation = (item: typeof navigationItems[0]) => {
    item.scrollTo()
    // Close mobile sidebar after navigation
    setOpenMobile(false)
  }

  const isCollapsed = state === "collapsed"

  return (
    <Sidebar className={isCollapsed ? "w-14" : "w-64"} collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-2">
            <img src="/lovable-uploads/b417384e-6164-4d06-abc7-0cd4839788bf.png" alt="Noble Foundation Logo" className="h-5 w-5 object-contain" />
            {!isCollapsed && <span>Noble Foundation</span>}
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton 
                    onClick={() => handleNavigation(item)}
                    className="cursor-pointer hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <item.icon className="h-4 w-4" />
                    {!isCollapsed && <span>{item.title}</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>
            {!isCollapsed && <span>Quick Actions</span>}
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  onClick={() => {
                    window.open('https://wa.me/263775095949?text=Hi! I would like to get involved with Noble Foundation and learn more about your mission.', '_blank')
                    setOpenMobile(false)
                  }}
                  className="cursor-pointer hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <Heart className="h-4 w-4" />
                  {!isCollapsed && <span>Get Involved</span>}
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}