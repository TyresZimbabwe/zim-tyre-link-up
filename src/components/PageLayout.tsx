
import React, { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  breadcrumbItems?: { name: string; path: string; current?: boolean }[];
  metaTitle?: string;
  metaDescription?: string;
}

const PageLayout = ({ 
  children, 
  title, 
  breadcrumbItems = [], 
  metaTitle, 
  metaDescription 
}: PageLayoutProps) => {
  // Set document title and meta description for SEO
  React.useEffect(() => {
    document.title = metaTitle || `${title} | Tyres Zimbabwe`;
    
    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', metaDescription || `${title} - Find quality tyres in Zimbabwe at competitive prices. Tyres Zimbabwe connects buyers and sellers across the country.`);
    }
  }, [title, metaTitle, metaDescription]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-tyreLightGray py-4">
          <div className="container mx-auto px-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                
                {breadcrumbItems.map((item, index) => (
                  <React.Fragment key={index}>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      {item.current ? (
                        <span className="font-medium text-tyreDarkGray">{item.name}</span>
                      ) : (
                        <BreadcrumbLink asChild>
                          <Link to={item.path}>{item.name}</Link>
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                  </React.Fragment>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-tyreDarkGray">{title}</h1>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
