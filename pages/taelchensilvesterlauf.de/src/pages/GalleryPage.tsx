import { useState, useRef, useEffect } from 'react';
import Gallery from '../components/Gallery';
import { galleryItems } from '../model/data/data';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useMediaQuery from '@mui/material/useMediaQuery';
import './GalleryPage.css';

const PAGE_SIZE = 8;

// Extract unique years from galleryItems
const years = Array.from(new Set(galleryItems.map(item => item.subtitle))).sort().reverse();

export default function GalleryPage() {
  const [page, setPage] = useState(0);
  const [mobilePages, setMobilePages] = useState(1);
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const isMobile = useMediaQuery('(max-width: 767px)');

  // Filter items by year
  const filteredItems = selectedYear === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.subtitle === selectedYear);

  const totalPages = Math.max(1, Math.ceil(filteredItems.length / PAGE_SIZE));

  // Desktop: only show current page
  const start = page * PAGE_SIZE;
  const items = isMobile
    ? filteredItems.slice(0, mobilePages * PAGE_SIZE)
    : filteredItems.slice(start, start + PAGE_SIZE);

  // Desktop arrows
  const prev = () => setPage(p => Math.max(0, p - 1));
  const next = () => setPage(p => Math.min(totalPages - 1, p + 1));

  // Mobile: lazy load next page on scroll to bottom
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!isMobile) return;
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new window.IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && mobilePages < totalPages) {
          setMobilePages(p => Math.min(totalPages, p + 1));
        }
      },
      { root: null, rootMargin: '0px', threshold: 1.0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [isMobile, mobilePages, totalPages]);

  // Reset page when year changes
  useEffect(() => {
    setPage(0);
    setMobilePages(1);
  }, [selectedYear]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
      <div style={{ marginBottom: 24 }}>
        <label htmlFor="year-filter" style={{ marginRight: 8 }}>Jahr:</label>
        <select
          id="year-filter"
          className="gallery-year-filter"
          value={selectedYear}
          onChange={e => setSelectedYear(e.target.value)}
        >
          <option value="all">Alle</option>
          {years.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>
      <Gallery galleryItems={items} />
      {isMobile ? (
        <div ref={sentinelRef} style={{ height: 24 }} />
      ) : (
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <IconButton aria-label="Zurück" onClick={prev} disabled={page === 0} size="large" color="inherit">
            <ArrowBackIosNewIcon />
          </IconButton>
          <span style={{ minWidth: 48, textAlign: 'center', fontWeight: 500 }}>
            {page + 1} / {totalPages}
          </span>
          <IconButton aria-label="Weiter" onClick={next} disabled={page >= totalPages - 1} size="large" color="inherit">
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      )}
    </Box>
  );
}
